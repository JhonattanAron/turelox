import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { createUser } from "../../redux/Thunks/UserThunks";
import User from "../../interfaces/UserModel";
import { CircularProgress } from "@mui/material";

export function Comprobacion(
  comprobacionOne: boolean,
  comprobacionTwo: boolean,
  comprobacionTree: boolean,
  comprobacionFour: boolean
) {
  let valid = false;
  let One = () => <div className="h-full col-span-3 bg-red-500 rounded"></div>;
  let Two = () => <div className="h-full col-span-3 bg-gray-500 rounded"></div>;
  let Tree = () => (
    <div className="h-full col-span-3 bg-gray-500 rounded"></div>
  );
  let Four = () => (
    <div className="h-full col-span-3 bg-gray-500 rounded"></div>
  );
  let OneGreen = () => (
    <div className="h-full col-span-3 bg-green-500 rounded"></div>
  );
  let TwoGreen = () => (
    <div className="h-full col-span-3 bg-green-500 rounded"></div>
  );
  let TreeGreen = () => (
    <div className="h-full col-span-3 bg-green-500 rounded"></div>
  );
  let FourGreen = () => (
    <div className="h-full col-span-3 bg-green-500 rounded"></div>
  );

  let text = () => (
    <div className="mt-2 flex text-red-500">
      <ExclamationCircleIcon className="w-5 mr-1" />
      Contraseña Insegura
    </div>
  );
  let textTrue = () => (
    <div className="mt-2 flex text-green-500">
      <ExclamationCircleIcon className="w-5 mr-1" />
      Contraseña Segura
    </div>
  );

  if (
    comprobacionOne &&
    comprobacionTwo &&
    comprobacionTree &&
    comprobacionFour
  ) {
    valid = true;
  }

  return (
    <div className="">
      <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
        {comprobacionOne ? OneGreen() : One()}
        {comprobacionTwo ? TwoGreen() : Two()}
        {comprobacionTree ? TreeGreen() : Tree()}
        {comprobacionFour ? FourGreen() : Four()}
      </div>
      {valid ? textTrue() : text()}
    </div>
  );
}

export default function RegisterForm() {
  const [click, setClick] = useState(false);
  const [datosGuardados, setDatosGuardados] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<boolean>(false);
  const [passequuals, setPassEquals] = useState(false);
  const [emailUsed, setEmailUsed] = useState(false);
  const [errorServidor, setErrorServidor] = useState(false);
  const [cargandoFecth, setCargandoFecth] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [comprobarPassword, setComprobarPassword] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [formData, setFormData] = useState<User>({
    id: "",
    username: "",
    email: "",
    password: password,
  });

  const retornarMensajePassword = (comprobar: boolean) => {
    if (comprobar) {
      return (
        <div className="mt-2 flex text-green-500">
          <ExclamationCircleIcon className="w-5 mr-1" />
          Las contraseñas coinciden
        </div>
      );
    } else {
      return (
        <div className="mt-2 flex text-red-500">
          <ExclamationCircleIcon className="w-5 mr-1" />
          las contraseñas no coinciden
        </div>
      );
    }
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    comprobarCaracteres(newPassword);
    setClick(true);
    setPassword(newPassword);
    setFormData({ ...formData, password: newPassword });
  };

  const equalsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(true);
    if (password === e.target.value && e.target.value.length >= 1) {
      setPassEquals(true);
    } else {
      setPassEquals(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const comprobarCaracteres = (passwor: string) => {
    const regexNumero = /\d/;
    const regexCaracterEspecial = /[!@#$%^&*/]/;

    const tieneNumero = regexNumero.test(password);
    const tieneCaracterEspecial = regexCaracterEspecial.test(password);
    if (passwor.length <= 0) {
      setComprobarPassword([false, false, false, false]);
    } else {
      setComprobarPassword([
        passwor.length >= 1,
        tieneNumero,
        password.length >= 8,
        tieneCaracterEspecial,
      ]);
    }
  };

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargandoFecth(true);
    const registro = await dispatch(createUser(formData));
    setCargandoFecth(false);
    setEmailUsed(registro.payload === 11000);
    setDatosGuardados(registro.payload === undefined);
    setErrorServidor(registro.payload.message === "Failed to fetch");
  };

  return (
    <div className="flex flex-wrap  justify-between w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Sing Up.</p>
          {datosGuardados ? (
            <div className="bg-white  rounded-xl ">
              <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
                  <span className="block">Greacias Por Registrarte</span>
                  <span className="block text-indigo-500">
                    Termina Tu Registro en tu Correo Electronico
                  </span>
                </h2>
              </div>
            </div>
          ) : (
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={HandleSubmit}
            >
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3  bg-white text-gray-500  text-sm">
                    <UserIcon className="w-[25px] h-[25px]" />
                  </span>
                  <input
                    type="text"
                    required={true}
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className=" flex-1 appearance-none rounded-lg   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Username"
                  />
                </div>
                <div className="flex relative mt-4 ">
                  <span className=" inline-flex  items-center px-3  bg-white    text-gray-500 text-sm">
                    <EnvelopeIcon className="w-[25px] h-[25px]" />
                  </span>
                  <input
                    type="email"
                    required={true}
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    id="design-login-email"
                    className=" flex-1 appearance-none rounded-lg   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                {emailUsed ? (
                  <div className="mt-2 text-red-500 flex">
                    <ExclamationCircleIcon className="w-5 mr-1" /> Email ya
                    registrado
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-col pt-4 ">
                <div className=" relative ">
                  <label htmlFor="password" className="text-gray-700 hidden">
                    Password
                    <span className="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="password"
                    required={true}
                    onChange={passwordChange}
                    value={password}
                    id="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="passwor"
                    placeholder="Password"
                  />
                  {click &&
                    Comprobacion(
                      comprobarPassword[0],
                      comprobarPassword[1],
                      comprobarPassword[2],
                      comprobarPassword[3]
                    )}
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className=" relative ">
                  <label htmlFor="password2" className="text-gray-700 hidden">
                    Repeat Password
                    <span className="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="password"
                    required={true}
                    id="password2"
                    onChange={equalsChange}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="password2"
                    placeholder=" Repeat Password"
                  />
                  {password2 ? retornarMensajePassword(passequuals) : <></>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
              >
                <span className="w-full">
                  {cargandoFecth ? <CircularProgress size={27} /> : "Register"}
                </span>
              </button>
              {errorServidor ? (
                <div className="mt-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" /> Error con el
                  Servidor Reporta
                  <a className="text-blue-500 mx-2 underline" href="/reportar">
                    Aqui
                  </a>
                </div>
              ) : (
                <></>
              )}
            </form>
          )}
          <div className="pt-12 pb-12 text-center">
            <p>
              You have an account?
              <a href="/login" className="font-semibold underline">
                Login here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40vw] rounded-xl mr-[5vw] shadow-2xl">
        <img
          alt="loginFot"
          className="hidden object-cover w-[40vw] rounded-xl h-[90vh] md:block"
          src="https://images.unsplash.com/photo-1578264271517-a3e0f4f67312?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
