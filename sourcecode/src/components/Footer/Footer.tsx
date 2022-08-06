import { Link } from "react-router-dom";
import { footerSections } from "../../utils/data";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { anaSoundRoutes } from "../../routing/routes-config";

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-section">
                <Link to={anaSoundRoutes.ACASA}><img src={logo} alt="Ana Sound" /></Link>
            </div>
            <div className="footer-section">
                {footerSections.map(item => 
                    <Link to={item.path} className="item" key={item.text}>{item.text}</Link>)
                }
            </div>
        </div>
    );
}

export default Footer;