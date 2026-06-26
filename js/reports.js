/**
 * ============================================================
 *  ARCHIVO DE CONFIGURACIÓN DE REPORTES
 * ============================================================
 *
 *  ROLES DISPONIBLES:
 *  - "admin"       → ve todo siempre
 *  - "ventas"      → ve solo categorías asignadas a "ventas"
 *  - "lostios"    → ve solo categorías asignadas a "lostios"
 *  (puedes crear los roles que necesites)
 *
 *  Cada categoría tiene un array "roles" con los roles
 *  autorizados. El rol "admin" siempre ve todo.
 *
 */

const REPORTS_DATA = [
  {
    category: "Ventas",
    icon: "📊",
    roles: ["ventas", "admin"],
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
    category: "Los Tíos",
    icon: "💰",
    roles: ["lostios", "admin"],
    reports: [
      {
        id: "los-tios",
        name: "Los Tíos",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMDI2YTczYmQtNTZlMS00MGMwLWFhMDItMDJkY2Y2Yzg1NjAxIiwidCI6ImM3ZGQ3YzhiLTk5YmYtNDdlOS1iNTlhLTgwNzE3MmQ5MTg0YSJ9"
      }
    ]
  },
  {
    category: "Operaciones",
    icon: "⚙️",
    roles: ["operaciones", "admin"],
    reports: [
      {
        id: "kpis-operativos",
        name: "KPIs Operativos",
        url: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
      }
    ]
  }
];