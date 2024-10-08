import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/Slices/Session";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AppDispatch, RootState } from "../../store";
import { LoginUserThunk } from "../../redux/Thunks/UserThunks";
import User from "../../interfaces/UserModel";

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [incorrectPass, setIncorrectPass] = useState(false);
  const [noRegister, setNoRegister] = useState(false);
  const [FormData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  const [ErrorLogin, setErrorLogin] = useState(false);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await dispatch(LoginUserThunk(FormData));
    if (response.payload.login) {
      Cookies.set("img_perfil", response.payload.imgProfile);
      Cookies.set("user", response.payload.user); //Guardar Login
      dispatch(Login());
    }
    setIncorrectPass(response.payload === 11001);
    setNoRegister(response.payload === 11002);
  };

  return (
    <div className="flex flex-wrap  justify-between w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={HandleSubmit}>
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex items-center px-3  bg-white text-gray-500  text-sm">
                  <EnvelopeIcon width={25} />
                </span>
                <input
                  required={true}
                  type="text"
                  id="email"
                  name="email"
                  onChange={HandleChange}
                  value={FormData.email}
                  className=" flex-1 appearance-none rounded-lg shadow-2xl  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              {noRegister ? (
                <div className="mt-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" /> Usuario No
                  Registrado
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex items-center px-3  bg-white text-gray-500  text-sm">
                  <KeyIcon width={25} />
                </span>
                <input
                  required={true}
                  type="password"
                  name="password"
                  onChange={HandleChange}
                  value={FormData.password}
                  id="password"
                  className=" flex-1 appearance-none rounded-lg shadow-2xl  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
              {incorrectPass ? (
                <div className="mt-2 text-red-500 flex">
                  <ExclamationCircleIcon className="w-5 mr-1" /> Contraseña
                  Incorrecta
                </div>
              ) : (
                <></>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-xl px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
            >
              <span className="w-full">Login</span>
            </button>
            {ErrorLogin ? (
              <div className="mt-2 text-red-500 flex">
                <ExclamationCircleIcon className="w-5 mr-1" /> Error con el
                Servidor Reporta{" "}
                <a className="ml-1 font-bold underline" href="/">
                  AQUI
                </a>
              </div>
            ) : (
              <></>
            )}
          </form>
          <div className="pt-12 pb-12 text-center">
            <p>
              Don&#x27;t have an account?
              <a href="/register" className="font-semibold underline">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40vw] rounded-xl mr-[5vw] shadow-2xl">
        <img
          alt="loginFot"
          className="hidden object-cover w-[40vw] rounded-xl h-[90vh] md:block"
          src="https://images.unsplash.com/photo-1605250803010-37d03931db8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
