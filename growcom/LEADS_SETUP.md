# Leads persistentes (Supabase)

Este proyecto ya esta preparado para guardar leads en Supabase automaticamente (web, LinkedIn e intake), con fallback a `data/leads.json` si faltan variables.

## 1) Crear tabla en Supabase

1. Abre el SQL Editor de Supabase.
2. Ejecuta el script:

- `supabase/leads_schema.sql`

## 2) Variables de entorno en Vercel

En el proyecto de Vercel, añade:

- `SUPABASE_URL` = URL del proyecto de Supabase
- `SUPABASE_SERVICE_ROLE_KEY` = Service Role Key de Supabase

## 3) Redeploy

Tras guardar variables, vuelve a desplegar en produccion.

## Endpoints y panel

- Formulario LinkedIn: `/linkedin`
- Panel de seguimiento: `/leads`
- Export Excel: `/api/leads/export`

Con Supabase activo, el Excel publico saldra con los leads reales guardados en produccion.
