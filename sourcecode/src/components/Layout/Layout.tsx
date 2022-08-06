import { PropsWithChildren } from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import PageContent from "../PageContent/PageContent";
import "./Layout.scss";

const Layout = ({children} : PropsWithChildren<{}>) => {
    return(
        <div className="page">
            <Menu />
            <PageContent children={children} />
            <Footer />
        </div>
    );
}

export default Layout;