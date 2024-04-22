import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h2>Misión</h2>
                <img
                    src="/images/about/diego_mision.webp"
                    alt="Fotrografía de la misión de la empresa"/>
                <ul>
                    <li>Inspirar a las nuevas generaciones a través del legado futbolístico y valores de Diego Armando Maradona.</li>
                    <li>Democratizar el acceso a productos de fútbol de alta calidad, honrando la pasión de Diego por el deporte.</li>
                    <li>Promover la unión y el amor por el fútbol en todo el mundo, siguiendo el ejemplo de unidad que representaba Maradona.</li>
                    <li>Preservar y difundir el legado de Diego Armando Maradona a través de productos de fútbol de alta calidad.</li>
                </ul>
            </Box>

            <Box
                component="section"
                className="about__section about__section--vision">
                <h2>Visión</h2>
                <img
                    src="/images/about/diego-vision.jpg"
                    alt="Fotrografía de la visión de la empresa"/>
                <ul>
                    <li>Ser la marca líder en productos de fútbol que evoque la pasión, la entrega y el talento de Diego Armando Maradona.</li>
                    <li>Convertirnos en un símbolo de la cultura futbolística global, inspirando a través de la historia y valores de Diego.</li>
                    <li>Crear una comunidad global de fanáticos del fútbol unidos por la admiración a Maradona y su legado.</li>
                    <li>Convertirnos en un símbolo de la pasión por el fútbol y la admiración por Maradona a nivel global.</li>
                </ul>
            </Box>

            <Box
                component="section"
                className="about__section">
                <h2>Valores</h2>
                <img
                    src="/images/about/diego-valores.jpg"
                    alt="Fotrografía de la valores de la empresa"/>
                <ul>
                    <li><strong>Pasión:</strong> Reflejar el amor por el fútbol que caracterizaba a Diego, contagiando entusiasmo a nuestros clientes.</li>
                    <li><strong>Trabajo en equipo:</strong>Valorar la colaboración y el esfuerzo colectivo, tal como lo hacía Maradona en la cancha.</li>
                    <li><strong>Excelencia:</strong>Perseguir la más alta calidad en nuestros productos y servicios, inspirándonos en la perfección futbolística de Diego.</li>
                    <li><strong>Respeto:</strong>Fomentar el respeto por el deporte, los rivales y la comunidad, valores que Diego siempre defendió.</li>
                    <li><strong>Compromiso social:</strong>Apoyar iniciativas que promuevan el acceso al fútbol y la educación para niños y jóvenes, siguiendo el ejemplo de compromiso social de Maradona.</li>
                    <li><strong>Inspiración:</strong>Motivar a las personas a perseguir sus sueños y alcanzar la excelencia.</li>
                </ul>
            </Box>
        </Box>
    );
};

export default About;