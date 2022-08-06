/*import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../utils/data";
import { IMenuItem } from "../../utils/interfaces";
import "./Menu.scss";

const Test = () => {

    const location = useLocation();
    const isSmallDevice = useMediaQuery({query: '(max-width: 992px)'});
    const [ isOpened, setIsOpened ] = useState(false);

    const renderLink = ({path, text} : IMenuItem) => {
        const isActive = location.pathname === path;
        return (
            <li className={"list__item " + (isActive && "active")} key={text}>
                <Link to={path}> {text} </Link>
            </li>)
    }

    const handleMenuOpened = () => {
        if(navRef.current) {  
            navRef.current.classList.toggle("responsive");
        }
        setIsOpened(!isOpened);
    }

    return(
        <nav className="nav-bar">
            <FontAwesomeIcon className={"nav-bar__icon " + (isOpened ? "opened" : "closed")} icon={isOpened ? faClose : faBars} onClick={handleMenuOpened}/>
            <ul className={"list " + (isOpened ? "opened" : "closed")} ref={navRef}>
                {menuItems.map((item: IMenuItem) => renderLink(item))}
            </ul>
        </nav>
    );
}

export default Test;
*/
export const Test = () => {}