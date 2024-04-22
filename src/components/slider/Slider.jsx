
import { useState } from "react";
import "./Slider.scss";
import PropTypes from "prop-types";

const Slider = ({ imagenes, titulos, descripciones }) => {

    const [diapositivaActual] = useState(0);

    return (
        <section className="section section--slider">
            <div className="slider">
                {imagenes.map((imagen, indice) => (
                    <div
                        key={indice}
                        className={`slider__${indice + 1} ${
                            diapositivaActual === indice ? "activo" : ""
                        }`}
                    >
                        <div>
                            <h4 className="slider__title">{titulos[indice]}</h4>
                            <p className="slider__description">{descripciones[indice]}</p>
                        </div>
                        <img
                            className="slider__image"
                            src={imagen}
                            alt={titulos[indice]}/>
                    </div>
                ))}

            </div>
        </section>
    );

};

Slider.propTypes = {
    imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
    titulos: PropTypes.arrayOf(PropTypes.string).isRequired,
    descripciones: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;