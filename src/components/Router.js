import { useRoutes } from "react-router-dom";
import { routes } from "../static/routes";

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;
