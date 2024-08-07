import {
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ProfileButtonMenu from "../admin/PrfileButton";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  const navigate = useNavigate();
  return (
    <div className="relative w-[100vw] flex justify-between">
      <div className="xl:hidden  bg-black shadow-xl h-[8vh] fixed bottom-0 left-0 right-0 z-10">
        <ul className="flex w-full h-full justify-around items-center p-3">
          <li>
            <button onClick={() => navigate("/home")}>
              <HomeIcon className="h-6 w-6 text-white" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/pedidos")}>
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/agregar")}>
              <PlusCircleIcon className="h-6 w-6 text-white" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/home")}>
              <BellIcon className="h-6 w-6 text-white" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/session")}>
              <UserCircleIcon className="h-6 w-6 text-white" />
            </button>
          </li>
        </ul>
      </div>
      <div className="z-40 fixed w-[100%] h-16  shadow-2xl bg-transparent">
        <div className="relative z-20 bg-black flex justify-between h-full w-full px-3 mx-auto flex-center">
          <div className="relative flex items-center justify-between  w-full pl-1 lg:max-w-68 xl:pr-2 xl:ml-0">
            <button className="flex-shrink-0" onClick={() => navigate("/home")}>
              <img
                className="w-8 h-8"
                src="https://store-images.s-microsoft.com/image/apps.9292.f7586ead-cd6c-4334-ab74-e72395afdcb9.4de59ba4-5981-4862-b898-709027028523.b9793569-c375-4a5b-81d9-e5f53d8c96fc"
                alt="Workflow"
              />
            </button>
            {Session ? (
              <></>
            ) : (
              <div className="xl:flex hidden  items-center justify-center space-x-4">
                <button
                  onClick={() => navigate("/home")}
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/gallery")}
                  className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  Gallery
                </button>
                <button
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  onClick={() => navigate("/#")}
                >
                  Content
                </button>
                <button
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  onClick={() => navigate("/home")}
                >
                  Contact
                </button>
              </div>
            )}
            <div className="relative flex items-center xl:right-auto">
              {Session ? (
                <ProfileButtonMenu />
              ) : (
                <div className="flex">
                  <button
                    onClick={() => navigate("/register")}
                    type="button"
                    className="py-2 px-4 mr-2 w-auto  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Registrate
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    type="button"
                    className="py-2 px-4 w-auto  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Inicia Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
