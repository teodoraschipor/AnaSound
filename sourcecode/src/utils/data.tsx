import { routesNames } from "../routing/routes-names";
import { getRoute } from "../routing/routes-utils";
import { IMenuItem } from "./interfaces";

export const menuItems : IMenuItem[] = [
    {
        text: "Acasă",
        path: getRoute(routesNames.ACASA),
    },
    {
        text: "Artiști",
        path: getRoute(routesNames.ARTISTI),
    },
    {
        text: "Albume",
        path: getRoute(routesNames.ALBUME),
    },
    {
        text: "Știri",
        path: getRoute(routesNames.STIRI),
    },
    {
        text: "Evenimente",
        path: getRoute(routesNames.EVENIMENTE),
    },
    {
        text: "Despre noi",
        path: getRoute(routesNames.DESPRENOI),
    },
    {
        text: "Contact",
        path: getRoute(routesNames.CONTACT),
    },
];

export const footerSections = [
    {
        text: "Confidențialitate & Cookies",
        path: getRoute(routesNames.CONFIDENTIALITATECOOKIES),
    },
    {
        text: "Termeni și condiții",
        path: getRoute(routesNames.TERMENICONDITII),
    },
    {
        text: "Informații de interes public",
        path: getRoute(routesNames.INFORMATIIINTERESPUBLIC),
    },
    {
        text: "Cod de conduită",
        path: getRoute(routesNames.CODCONDUITA),
    },
];