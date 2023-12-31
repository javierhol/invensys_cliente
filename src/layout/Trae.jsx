import { MenuLateral } from "../components/MenuLateral";
import { SubMenu } from "../components/SubMenu";
import { FormTrae } from "../log/FormTrae";
import { ListTrae } from "../log/ListTrae";
import "../components/efectosCss.css";
const Trae = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#cff5fb] from-2% via-[#beb6fb87] via-30% to-[#d7e4fabe] to-90%  w-full block  min-h-screen
        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%"
    >
      <div
        className="sticky top-0 py-3 hidden lg:block effect_blure h-fit w-full
      
      "
      >
        <SubMenu />
      </div>
      <div className="flex">
        <MenuLateral />
        <div className=" ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2
                className="text-3xl md:text-4xl
               mb-10 font-bold text-gray-700 font-sans mx-0 dark:text-white"
              >
                Negocio/Empresa
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <div
              className="container_c flex
              gap-2 justify-between flex-col md:flex-row  max-w-7xl w-auto mx-auto"
            >
              <div className="g hidden md:block">
                <FormTrae />
              </div>
              <ListTrae />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trae;
