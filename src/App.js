import { createBrowserRouter } from "react-router-dom";
import BuyOrders from "./routes/BuyOrders";
import DataSets from "./routes/Datasets";
import EditBuyOrder from "./routes/EditBuyOrder";

const router = createBrowserRouter([
  {
    path: '/',
    element: <BuyOrders />
  },
  {
    path: '/edit',
    element: <EditBuyOrder />
  },
  {
    path: '/datasets',
    element: <DataSets />
  }
])

export default router;