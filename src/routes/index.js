import RequstPage from "../sub-pages/request-page";
import ServicesPage from "../sub-pages/services-page";
import PaymentsPage from "../sub-pages/payments-page"

export const mainRoutes = [  
  {
    path: "/requests",
    component: RequstPage
  },
  {
    path: "/services",
    component: ServicesPage
  },
  {
    path: "/payments",
    component: PaymentsPage
  },
]

