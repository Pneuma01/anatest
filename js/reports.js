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
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      },
      {
        id: "ventas-por-region",
        name: "Ventas por Región",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      }
    ]
  },
  {
    category: "Finanzas",
    icon: "💰",
    reports: [
      {
        id: "flujo-de-caja",
        name: "Flujo de Caja",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      },
      {
        id: "presupuesto-vs-real",
        name: "Presupuesto vs Real",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      }
    ]
  },
  {
    category: "Operaciones",
    icon: "⚙️",
    reports: [
      {
        id: "kpis-operativos",
        name: "KPIs Operativos",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      }
    ]
  }
];
