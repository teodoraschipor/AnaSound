import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../utils/data";
import { ILinkItem } from "../../utils/interfaces";
import "./Menu.scss";

const Menu = () => {

    const location = useLocation();
    const [ isOpened, setIsOpened ] = useState(false);
    const isSmallDevice  = useMediaQuery({ query: "(max-width: 992px)" });

    const renderLink = ({path, text} : ILinkItem) => {
        const isActive = location.pathname === path;
        return (
                <Link to={path} className={"nav-bar__item " + (isActive && "active")} onClick={() => setIsOpened(false)} key={text}> {text} </Link>
                );
    }

    const handleNavClassName = () => {
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

    const handleMenuOpened = () => {
        setIsOpened(!isOpened);
    }

    return(
        <div>
            <FontAwesomeIcon className={"icon " + (isOpened ? "opened" : "closed")} icon={isOpened ? faClose : faBars} onClick={handleMenuOpened}/>
            <nav className={"nav-bar " + handleNavClassName()}>
                {menuItems.map((item: ILinkItem) => renderLink(item))}
            </nav>
        </div>
    );
}

export default Menu;