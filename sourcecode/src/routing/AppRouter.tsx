import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Acasa from "../pages/Acasa/Acasa";
import Albume from "../pages/Albume/Albume";
import Artisti from "../pages/Artisti/Artisti";
import CodConduita from "../pages/CodConduita/CodConduita";
import ConfidentialitateCookies from "../pages/ConfidentialitateCookies/ConfidentialitateCookies";
import Contact from "../pages/Contact/Contact";
import DespreNoi from "../pages/DespreNoi/DespreNoi";
import Evenimente from "../pages/Evenimente/Evenimente";
import InformatiiInteres from "../pages/InformatiiInteres/InformatiiInteres";
import Stiri from "../pages/Stiri/Stiri";
import TermeniConditii from "../pages/TermeniConditii/TermeniConditii";
import { routesNames } from "./routes-names";
import { getRoute } from "./routes-utils";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout> <Acasa /> </Layout>} path={getRoute(routesNames.ACASA)} />
                <Route element={<Layout> <Artisti /> </Layout>} path={getRoute(routesNames.ARTISTI)} />
                <Route element={<Layout> <Albume /> </Layout>} path={getRoute(routesNames.ALBUME)} />
                <Route element={<Layout> <Stiri /> </Layout>} path={getRoute(routesNames.STIRI)} />
                <Route element={<Layout> <Evenimente /> </Layout>} path={getRoute(routesNames.EVENIMENTE)} />
                <Route element={<Layout> <DespreNoi /> </Layout>} path={getRoute(routesNames.DESPRENOI)} />
                <Route element={<Layout> <Contact /> </Layout>} path={getRoute(routesNames.CONTACT)} />
                <Route element={<Layout> <ConfidentialitateCookies /> </Layout>} path={getRoute(routesNames.CONFIDENTIALITATECOOKIES)} />
                <Route element={<Layout> <TermeniConditii /> </Layout>} path={getRoute(routesNames.TERMENICONDITII)} />
                <Route element={<Layout> <InformatiiInteres /> </Layout>} path={getRoute(routesNames.INFORMATIIINTERESPUBLIC)} />
                <Route element={<Layout> <CodConduita /> </Layout>} path={getRoute(routesNames.CODCONDUITA)} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;