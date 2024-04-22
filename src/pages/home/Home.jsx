import { useState } from "react";
import { Box } from "@mui/material";
import "./home.scss";

import { IT_IS_OFF } from "../../constants/general.js";

import ProductSearch from "../../components/productSearch/ProductSearch";
import ProductCard from "../../components/productCard/ProductCard";
import ProductCreateCard from "../../components/productCreateCard/ProductCreateCard.jsx";
import Slider from "../../components/slider/Slider.jsx";

const Home = () => {
    const [ products, setProducts ] = useState([]);

    const imagenes = [
        "/images/sliders/slider-pelota.png",
        "/images/sliders/slider-guantes.png",
        "/images/sliders/slider-botines.png",
    ];
    const titulos = [ "La pelota no se mancha", "Para arqueros!", "Promos en botines" ];
    const descripciones = [ "9 cuotas SIN INTERES", "2x1 en seleccionados", "Hasta 20% OFF" ];

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">

                <Slider
                    imagenes={imagenes}
                    titulos={titulos}
                    descripciones={descripciones}/>

                <Box className="home__section__search">
                    <h3>Productos</h3>
                    <ProductSearch setProducts={setProducts}/>
                </Box>

                <Box
                    className="home__section__cards">
                    <ProductCreateCard/>
                    {products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            setProducts={setProducts}
                            itIsOff={IT_IS_OFF}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;