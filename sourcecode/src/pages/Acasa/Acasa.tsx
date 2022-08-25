import { useEffect } from "react";
import { carouselItems } from "../../utils/data";
import "./Acasa.scss";

const Acasa = () => {

    useEffect(() => {
        localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
    }, [])

    return(
        <div className="acasa-page">
        </div>
    );
};

export default Acasa;