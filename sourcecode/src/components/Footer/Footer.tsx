import { Link, useLocation } from "react-router-dom";
import { footerItems } from "../../utils/data";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { anaSoundRoutes } from "../../routing/routes-config";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { ILinkItem } from "../../utils/interfaces";

const Footer = () => {

    const location = useLocation();
    const isSmallDevice = useMediaQuery({ query: "(max-width: 992px)" });
    const [ isOpened, setIsOpened ] = useState(false);

    const renderLink = ({path, text} : ILinkItem) => {
        const isActive = location.pathname === path;
            return (
                <Link to={path} className={"footer-section__item " + (isActive && "active")} onClick={() => setIsOpened(false)} key={text}>{text}</Link>
                );

    }

    const handleFooterClassName = () => {
        let navClasses = [];
        if(isSmallDevice) {
            if(isOpened) {
                navClasses.push("opened");
            } else {
                navClasses.push("closed");
            }
        }
        return navClasses.join(" ");
    }

    const handleFooterOpened = () => {
        setIsOpened(!isOpened);
    }

    return(
        <div className="footer">
            <div className="footer-section">
                <Link to={anaSoundRoutes.ACASA}><img src={logo} alt="Ana Sound" /></Link>
            </div>
            <FontAwesomeIcon className={"footer__icon " + (isOpened ? "opened" : "closed")} icon={isOpened ? faAngleDown : faAngleUp} onClick={handleFooterOpened}/>
            <div className={"footer-section " + handleFooterClassName()}>
                {footerItems.map((item: ILinkItem) => renderLink(item))}
            </div>
        </div>
    );
}

export default Footer;