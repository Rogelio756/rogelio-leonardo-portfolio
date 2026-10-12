// Recibe el registro de /card y lo guarda en la base "Contactos de networking" de Notion.
// Variables de entorno en Vercel:
//   NOTION_TOKEN        -> token de tu integración interna de Notion (secreto)
//   NOTION_DATABASE_ID  -> ID de la base (opcional; por defecto la de abajo)

const DEFAULT_DB = "a3cbddaa1735463a99c80bc2857b21c9";
const TEMAS = ["Colaboración técnica", "Oportunidad laboral", "Investigación", "Solo conectar"];
const ORIGENES = ["gdg", "tarjeta", "slide", "evento", "directo"];

const clean = (v, max) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, max);
const text = (v) => ({ rich_text: v ? [{ text: { content: v } }] : [] });

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  // Trampa para bots: un campo oculto que una persona nunca llena.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const nombre = clean(body.nombre, 120);
  const correo = clean(body.correo, 160).toLowerCase();
  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) || body.consent !== true) {
    return res.status(400).json({ ok: false, error: "invalid" });
  }

  const tema = TEMAS.includes(body.tema) ? body.tema : "Solo conectar";
  const origenRaw = clean(body.origen, 40).toLowerCase();
  const origen = ORIGENES.includes(origenRaw) ? origenRaw : "directo";

  const token = process.env.NOTION_TOKEN;
  if (!token) return res.status(500).json({ ok: false, error: "not_configured" });

  const properties = {
    "Nombre": { title: [{ text: { content: nombre } }] },
    "Correo": { email: correo },
    "LinkedIn o teléfono": text(clean(body.contacto, 200)),
    "Empresa": text(clean(body.empresa, 160)),
    "Tema": { select: { name: tema } },
    "Comentario": text(clean(body.comentario, 1000)),
    "Origen": { select: { name: origen } },
    "Estatus": { select: { name: "Nuevo" } }
  };

  try {
    const r = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID || DEFAULT_DB },
        properties
      })
    });
    if (!r.ok) {
      console.error("Notion error", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "notion" });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Notion request failed", e);
    return res.status(502).json({ ok: false, error: "network" });
  }
};
