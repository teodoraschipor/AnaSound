import { anaSoundRoutes } from "./routes-config";
import { routesNames } from "./routes-names";

export const getRoute = (route: routesNames) => {
    return anaSoundRoutes[route];
};