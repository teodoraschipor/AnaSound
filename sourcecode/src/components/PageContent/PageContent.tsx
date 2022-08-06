import { PropsWithChildren } from "react";
import "./PageContent.scss";

const PageContent = ({children} : PropsWithChildren<{}>) => {
    return(
        <div className="page-content">
            {children}
        </div>
    );
}

export default PageContent;