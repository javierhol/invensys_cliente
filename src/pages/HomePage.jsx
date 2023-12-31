import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBolt,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import rowFirst from "../assets/img/curba1.png";
import curba2 from "../assets/img/curba2.png";
import curba3 from "../assets/img/curba3.png";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.png";
import Header from "../components/Header";
import "../assets/css/fuente.css";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import SliderCount from "../components/SliderCount";
import { Sled } from "../components/Sled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ViewOne } from "../components/componentsHome/ViewOne";
import { useEffect, useMemo, useState } from "react";
import { HomeEfectA } from "./homeAparience/HomeEfectA";
import "./scrolfH.css";

export const HomePage = () => {
  AOS.init({
    duration: 3000,
  });
  document.body.style = "overflow-x: hidden";
  // webkit-scrollbar
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    const botoomsub = document.querySelector(".botoomsub");
    const principal = document.querySelector("#principal");
    var height = principal.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > height) {
        botoomsub.classList.add("activest");
      } else {
        botoomsub.classList.remove("activest");
      }
    });
  }, []);

  const pagePrincipal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <div id="principal">
      <div
        className="w-full  overflow-x-hidden 
        
        "
      >
        <div className=" top-0 relative z-50">
          <Header />
        </div>
        <div className=" bg-white cursor-pointer  botoomsub fixed z-50 right-0 p-3 md:p-3.5 m-7 shadow-lg rounded-full border bottom-0">
          <span onClick={pagePrincipal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
            >
              <path
                fill="#777777"
                d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20h-2Z"
              />
            </svg>
          </span>
        </div>
        <div className=" colorcamb  ">
          <div className="content-home">
            <div className=" w-full  text-xl md:w-4/5  md:pl-10">
              <h2 className="h5-mktg w-full text-5xl z-50">
                ¡Comienza a crear tu propio inventario para llevar un mejor
                manejo de tu negocio...!
              </h2>
              <p className="text-slate-400 m-2 md:m-0 m md:text-start md:py-2 md:text-2xl text-center">
                ¡Los pequeños emprendedores y comerciantes merecen mucho más con
                invensys expande tu negocio! 100% gratuito
              </p>
              <p className="h-2 mx-4 md:m-0 bg-emerald-400 rounded-full animate__animated animate__bounceInLeft"></p>
              <div className="n hidden lg:block">
                <Link
                  to={"/login"}
                  className="
        bg-white py-3 inline-block
       mt-12 mb-36 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y "
                >
                  Comienza ya{" "}
                </Link>
                <Link
                  to={"/"}
                  className="
        bg-white ml-4 py-3 inline-block
       my-5 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y "
                >
                  Explorar más{" "}
                </Link>
              </div>
            </div>
            <div className="w-full">
              <LazyLoadImage
                effect="blur"
                className="mt-10 w-full animate__animated animate__fadeIn"
                type="imagen"
                src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1682002355/stored/Frame_1_b7ymvc.png"
                alt="stored"
              />
            </div>
          </div>
          <div className="elementor-background-overlay"></div>
          <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="#18324f"
            >
              <path
                className={darkMode ? "transparent" : "elementor-shape-fill"}
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
              ></path>
            </svg>{" "}
          </div>
          <div className="seccion2"></div>
        </div>
        <div className="rounded flex flex-col md:flex-row items-center  justify-around lg:justify-between  max-w-6xl md:mx-auto my-14 ">
          <div className="circlepath hidden md:block" data-aos="fade-right">
            <div className="img-sec1">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-[#fde047] absolute top-20
       lg:left[3rem]  xl:left[10rem]  m-1"
              />
              <LazyLoadImage
                src={curba2}
                alt=""
                className="absolute bottom-[-16.9rem] left-[-6rem] w-36"
                effect="blur"
              />
              <Sled />
            </div>
            <div className="circle1" data-aos="zoom-in-left"></div>
            <div className="circle2" data-aos="zoom-in-right"></div>
          </div>
          <div className="row hidden xl:block">
            <LazyLoadImage
              effect="bl"
              src={rowFirst}
              alt=""
              className="w-[16rem] lg:w-[30rem] h-42"
            />
          </div>
          <div
            className="w-[93%]  mx:auto md:w-96 relative shadow-2xl dark:text-white dark:bg-[#37415197] bg-white rounded-md border p-10 "
            data-aos="fade-left"
            style={{ zIndex: -1 }}
          >
            <div className="cir1 h-4 m-1 w-4 absolute bg-red-500 top-0 left-0 rounded-full"></div>
            <div className="cir2 h-4 m-1 w-4 absolute bg-[#fbbf24] top-0 left-6 rounded-full"></div>
            <div className="cir3 h-4 m-1 w-4 absolute bg-green-500 top-0 left-12 rounded-full"></div>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#fde047] absolute top-0 right-0 m-1"
            />
            <span className="text-md lg:text-xl dark:text-white  text-slate-700 fade-right">
              Invensys es una aplicación de administración para el inventario de
              los productos de tu negocio, en la cual podrás llevar un control
              permanente de todos ellos, necesidades de abastecimiento, reporte
              de vencimientos, rotación de productos y podrás utilizarla para el
              manejo administrativo y financiero de tu negocio.
            </span>
          </div>
        </div>
        <div className="text-center fuente-t1  ">
          <span className="text-2xl md:text-6xl h-36 dark:text-white">
            ¿Qué esperas de nuestra plataforma?
          </span>
        </div>
        <div className="relative">
          <div
            className="grid grid-cols-1 md:mx-auto  sm:grid-cols-2 grid-flow-dense
      max-w-7xl mx-5 md:lg-auto
      md:grid-cols-3  gap-5"
          >
            <section
              className="bg-white dark:text-white dark:bg-[#37415197] w-full  flex flex-col items-center  md:mx-0 rounded shadow-2xl cursor-pointer p-1 "
              data-aos="fade-right"
            >
              <div className="relative ">
                <LazyLoadImage
                  className=" w-56 md:w-full"
                  src={imagen4}
                  alt="stored"
                  effect="blur"
                />
              </div>
              <div className="    ">
                <p className="text-gray-800 dark:text-white rounde-sm  mx-3 text-center text-xl border-t border-t-slate-200">
                  Llevaras un registro de tus productos de entrada y salidas,
                  mediante reportes que estaran pendiente de tu inventario.{" "}
                </p>
              </div>
            </section>
            <section
              className="bg-white w-full dark:text-white dark:bg-[#37415197]  flex flex-col items-center  md:mx-0  rounded shadow-2xl cursor-pointer p-1"
              data-aos="fade-up"
            >
              <div className="relative ">
                <div className=" ">
                  <LazyLoadImage
                    effect="blur"
                    className="w-56 md:w-full"
                    src={imagen5}
                    alt=""
                  />
                </div>
              </div>
              <div className="container paragraph  ">
                <p className="text-gray-800 rounde-sm  dark:text-white mx-3 text-center text-xl border-t border-t-slate-200">
                  Tu información esta segura, nos importa de que tus datos no se
                  pierdan y no hallan fallos al momento de utilizar nuesto
                  servicio.
                </p>
              </div>
            </section>
            <section
              className="bg-white dark:text-white dark:bg-[#37415197] w-full flex flex-col items-center  md:mx-0  rounded shadow-2xl cursor-pointer p-1 "
              data-aos="fade-left"
            >
              <div className="relative ">
                <div className=" ">
                  <LazyLoadImage
                    className="w-56 md:w-full"
                    src={imagen6}
                    alt=""
                    effect="blur"
                  />
                </div>
              </div>
              <div className="container paragraph  ">
                <p className="text-gray-800 dark:text-white   mx-3 text-center text-xl border-t border-t-slate-200">
                  Podras crear usuarios que ayude llevar un mejor control de tu
                  inventario, a travez de roles que faciliten el manejo de tu
                  negocio.{" "}
                </p>
              </div>
            </section>
          </div>
        </div>

        <ViewOne />
        <div className="text-center fuente-t1 ">
          <span
            className="
      text-2xl md:text-6xl h-36 dark:text-white"
          >
            Impulsamos en la innovación
          </span>
        </div>

        <div
          className="flex flex-col lg:flex-row  items-center justify-center lg:justify-around 
        
      bg-gradient-to-r from-[#fff] from-10%
        via-[#fff] dark:via-30% to-[#a1c9ff] to-90%
        
        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
        dark:via-[#18324f] via-30% dark:to-[#121b2e] dark:to-90%
        "
        >
          <div className=" flex flex-col lg:flex-row justify-center relative  ">
            <div className="h-3/5 hidden lg:block relative w-1 lg:ml-16 lg:mt-4  colorbgline"></div>
            <LazyLoadImage
              effect="bl"
              src={curba3}
              alt=""
              className="absolute hidden lg:block top-0 left-20"
            />
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              data-aos="zoom-in"
              className="
          absolute top-[-4px] shadow-lg hidden lg:block
           shadow-[#fde047] text-[#facc15] left-14"
            />
            <article className="md:w-[30rem] lg:mt-20 " data-aos="flip-left">
              <p className="">
                <span className="text-[#3376F9] dark:text-white font2 t ">
                  <div className="span">
                    Invensys un servicio de alta calidad.
                  </div>
                  <span className="font3s">
                    <div className="text-md dark:text-white">
                      Nuestra plataforma impulsa la innovación con herramientas
                      que aumentan la seguridad de tu negocio
                    </div>
                  </span>
                </span>
              </p>
              <div className="scalewrap"></div>
              <p className="text-center md:text-start dark:text-white max-w-sm lg:ml-8 text-xl text-gray-700 ">
                {" "}
                Aumento del 100% en la productividad de tu trabajo después de 1
                año
              </p>
            </article>
          </div>

          <div className=" lg:mr-10 my-10 flex lg:self-end bg-slik ">
            <LazyLoadImage
              src={imagen7}
              alt=""
              className="w-full"
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className="slid">
          <HomeEfectA />
        </div>
        <div className="text-center fuente-t1 ">
          <span className="text-2xl md:text-6xl dark:text-white">
            Comodo para que cualquier persona pueda utilizarlo sin dificultad
          </span>
        </div>
        {/* ? section cards  */}
        <div className="block md:hidden">
          <h2 className="w-[90%] mb-5  mx-auto font-bold text-2xl dark:text-white">
            Información sobre <span className="text-[#3498db]">Invensys</span>{" "}
          </h2>
          <div className="cards">
            <section className="bg-white dark:border-[#777777] dark:bg-[#37415197] border mb-6 shadow-md mt-2 w-[90%] mx-auto rounded-lg p-2 ">
              <h2 className="text-xl font-bold dark:text-white">
                Manejo de tu inventario mas facil y comodo
              </h2>
              <p className="dark:text-white">
                Con invensys podra llevar un control permanente de todos los
                productos, necesidades de abastecimiento, reporte de
                vencimientos y rotaciond e sus productos.
              </p>
            </section>
            <section className="dark:border-[#777777] dark:bg-[#37415197] bg-white border shadow-md mb-4 mt-2 w-[90%] mx-auto rounded-lg p-2 ">
              <h2 className="text-xl font-bold dark:text-white">
                Estadisticas y informes de tu negocio
              </h2>
              <p className="dark:text-white">
                Representación de graficas, ayudando un mejor analisis de tu
                negocio para que puedas mejorar y que tu negocio cresca más
              </p>
            </section>
          </div>
        </div>

        <SliderCount />
        <div className="img">{/* <CardHomeFine /> */}</div>

        <Footer />
      </div>
    </div>
  );
};
