import { useEffect, useMemo, useState } from "react";

import { useParams, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
export const ModalModule = () => {
  const [stateMode, setStateMode] = useState(false);
  const {
    getUsers,
    getUsersAdmins,
    userModuleRegister,
    getModule,
    moduleUsers,
    DeleteModuleU,
  } = useGetUsers();

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useMemo(() => {
    setLoading(true);
    const initial = async () => {
      await getUsersAdmins();
      await getModule(id);
      setLoading(false);
    };
    initial();
  }, []);

  const handleinventory = async () => {
    try {
      let modules = "bodega";
      let data = {
        idAccount: id,
        module: modules,
      };
      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleProduct = async () => {
    try {
      let modules = "producto";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          setStateMode(true);
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
          setStateMode(false);
        } else {
          setStateMode(false);
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlenotify = async () => {
    try {
      let modules = "notificaciones";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleProveedor = async () => {
    try {
      let modules = "proveedor";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAnalityc = async () => {
    try {
      let modules = "analityc";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCompras = async () => {
    try {
      let modules = "pedidos";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleVentas = async () => {
    try {
      let modules = "venta";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCategory = async () => {
    try {
      let modules = "categorias";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInventoryGeneral = async () => {
    try {
      let modules = "inventoryGeneral";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDasboard = async () => {
    try {
      let modules = "dasboard";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleTrae = async () => {
    try {
      let modules = "trae";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleLicence = async () => {
    try {
      let modules = "LicenceSoftware/state";
      let data = {
        idAccount: id,
        module: modules,
      };

      let response = false;

      moduleUsers.map((modul) => {
        if (modul.titulo === modules) {
          DeleteModuleU(modul.IDmodulo, modul.titulo);
          response = true;
        } else {
          response = false;
        }
        return response;
      });
      if (response === false) {
        userModuleRegister(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {getUsers
        .filter((getuser) => getuser.idAccount === id)
        .map((getuse) => (
          <>
            <div
              className="bg-white min-h-screen

              dark:bg-gradient-to-r from-[#163b59] from-10%
               via-[#18324f] via-30% to-[#121b2e] to-90%    w-full h-full top-0"
              key={getuse.idAccount}
            >
              {loading === true ? (
                <div className="contenedor p-3 border-b dark:bg-[#37415197] dark:text-white bg-white border rounded-lg shadow-xl max-w-6xl mx-auto mt-20">
                  <div className="container items-center flex justify-between">
                    <span className="w-36 ">
                      <Skeleton height={16} />
                    </span>
                    <span className="w-56 ">
                      <Skeleton height={36} />
                    </span>
                    <span className="w-36 ">
                      <Skeleton height={16} />
                    </span>
                  </div>

                  <div className="section1 flex justify-around items-center mt-16">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="contenedor dark:bg-[#37415197] dark:text-white dark:border-none p-3 border-b bg-white border rounded-lg shadow-xl max-w-6xl mx-auto mt-20 ">
                  <div className="head_p relative flex items-center justify-between">
                    <Link to="/usuarios" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="currentColor"
                          d="M24.96 32.601L12.371 19.997l.088-.088l12.507-12.52a.661.661 0 0 0-.01-.921a.645.645 0 0 0-.458-.182a.653.653 0 0 0-.465.186l-13.004 13.02a.63.63 0 0 0-.176.49a.656.656 0 0 0 .18.523l13.014 13.031c.244.23.659.233.921-.02a.658.658 0 0 0-.008-.915z"
                        />
                      </svg>
                    </Link>
                    <strong className="text-2xl">
                      Modulos y permisos de usuarios
                    </strong>
                    <div className="user text-[#019afa]">{getuse.correo}</div>
                  </div>
                  <div className="contenerdor_items mt-10">
                    <div className=" flex justify-evenly items-center">
                      <div className="title">bodega</div>
                      <div className="toogle flex items-center">
                        <span className="mx-1">Activar</span>
                        <button
                          onClick={handleinventory}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.titulo === "bodega"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "bodega"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                      </div>
                      <div className="toogle flex items-center">
                        <span className="mx-1">Actualizar</span>
                        <button
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.titulo === "bodega"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "bodega"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                      </div>
                      <div className="toogle flex items-center">
                        <span className="mx-1">Editar</span>
                        <button
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.titulo === "bodega"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "bodega"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                      </div>
                      <div className="toogle flex items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.titulo === "bodega"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "bodega"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div className="title">Productos</div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Activar</span>
                          <button
                            onClick={handleProduct}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "producto"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "producto"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "producto"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "producto"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "producto"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "producto"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "producto"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "producto"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.50rem]"
                          title="notificaciónes"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          notificaciónes
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Activar</span>
                          <button
                            onClick={handlenotify}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "notificaciones"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "notificaciones"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "notificaciones"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "notificaciones"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "notificaciones"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "notificaciones"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "notificaciones"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "notificaciones"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div className="title">Proveedor</div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Activar</span>
                          <button
                            onClick={handleProveedor}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "proveedor"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "proveedor"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "proveedor"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "proveedor"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            onClick={handleProveedor}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "proveedor"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "proveedor"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            onClick={handleProveedor}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "proveedor"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "proveedor"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title  w-[4.50rem]"
                          title="Analitica de datos"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Analitica de datos
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Activar</span>
                          <button
                            onClick={handleAnalityc}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "analityc"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "analityc"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "analityc"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "analityc"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "analityc"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "analityc"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "analityc"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "analityc"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div className="title">Pedidos</div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleCompras}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "pedidos"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "pedidos"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "pedidos"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "pedidos"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "pedidos"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "pedidos"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "pedidos"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "pedidos"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div className="title mx-1.5">Ventas</div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleVentas}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "venta"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "venta"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "venta"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "venta"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "venta"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "venta"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "venta"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "venta"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.20rem]"
                          title="Categorias"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Categorias
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleCategory}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "categorias"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "categorias"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "categorias"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "categorias"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "categorias"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "categorias"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "categorias"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "categorias"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.20rem]"
                          title="Categorias"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Inventario
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleInventoryGeneral}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "inventoryGeneral"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "inventoryGeneral"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "inventoryGeneral"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "inventoryGeneral"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "inventoryGeneral"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "inventoryGeneral"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "inventoryGeneral"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "inventoryGeneral"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.20rem]"
                          title="Categorias"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Dasboard
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleDasboard}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "dasboard"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "dasboard"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "dasboard"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "dasboard"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "dasboard"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "dasboard"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "dasboard"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo === "inventoryGeneral"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.20rem]"
                          title="Negocio"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Negocio
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleTrae}
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "trae"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "trae"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "trae"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "trae"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "trae"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "trae"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.titulo === "trae"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) => moduleUser.titulo === "trae"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="buttoms">
                      <div className=" flex justify-evenly items-center my-10">
                        <div
                          className="title w-[4.20rem]"
                          title="Licencia"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          Licencia
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1.5">Activar</span>
                          <button
                            onClick={handleLicence}
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "LicenceSoftware/state"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo ===
                                    "LicenceSoftware/state"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Actualizar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "LicenceSoftware/state"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo ===
                                    "LicenceSoftware/state"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center ">
                          <span className="mx-1">Editar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "LicenceSoftware/state"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo ===
                                    "LicenceSoftware/state"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                        <div className="toogle flex items-center">
                          <span className="mx-1">Eliminar</span>
                          <button
                            className={
                              moduleUsers.filter(
                                (moduleUser) =>
                                  moduleUser.titulo === "LicenceSoftware/state"
                              ).length > 0
                                ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                                : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                            }
                          >
                            <span
                              className={
                                moduleUsers.filter(
                                  (moduleUser) =>
                                    moduleUser.titulo ===
                                    "LicenceSoftware/state"
                                ).length > 0
                                  ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                  : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                              }
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
    </>
  );
};
