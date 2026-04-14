/**
 * ============================================================
 *  ARCHIVO DE CONFIGURACIÓN DE REPORTES
 *  Edita este archivo para agregar, quitar o modificar reportes
 * ============================================================
 *
 *  CÓMO AGREGAR UN REPORTE:
 *  1. Copia el link de "Publicar en Web" desde Power BI Service
 *  2. Agrégalo como un objeto { id, name, url } dentro de la
 *     categoría correspondiente
 *  3. Si la categoría no existe, crea un nuevo bloque { category, reports: [...] }
 *
 */

const REPORTS_DATA = [
  {
    category: "Ventas",
    icon: "📊",
    reports: [
      {
        id: "ventas-mensual",
        name: "Ventas Mensual",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNzI5MjNkNTUtYjQzMS00NGM2LWJmZjMtNzcxNjU4ZmMyNzYwIiwidCI6ImM3ZGQ3YzhiLTk5YmYtNDdlOS1iNTlhLTgwNzE3MmQ5MTg0YSJ9"
      },
      {
        id: "los-tios",
        name: "Los Tíos",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMDI2YTczYmQtNTZlMS00MGMwLWFhMDItMDJkY2Y2Yzg1NjAxIiwidCI6ImM3ZGQ3YzhiLTk5YmYtNDdlOS1iNTlhLTgwNzE3MmQ5MTg0YSJ9"
      }
    ]
  },
  {
    category: "SANA",
    icon: "💰",
    reports: [
      {
        id: "atenciones",
        name: "Atenciones",
        url: "https://app.powerbi.com/view?r=eyJrIjoiZGM1MTZjN2ItYzA0OS00ODBmLTg5ZGYtYjU0MDQyNTUwOWQ3IiwidCI6ImM3ZGQ3YzhiLTk5YmYtNDdlOS1iNTlhLTgwNzE3MmQ5MTg0YSJ9"
      },
      {
        id: "presupuesto-vs-real",
        name: "Presupuesto vs Real",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      }
    ]
  },
  {
    category: "Ejemplos",
    icon: "⚙️",
    reports: [
      {
        id: "ejemplos-covid",
        name: "COVID-19",
        url: "https://app.powerbi.com/view?r=eyJrIjoiOTcxZDhjYmEtMWRhNC00YWQ3LWJjMWQtZDMyYjZhOTlmZWI1IiwidCI6ImM3ZGQ3YzhiLTk5YmYtNDdlOS1iNTlhLTgwNzE3MmQ5MTg0YSJ9"
      }
    ]
  }
];
