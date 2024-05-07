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

export default function NavBar() {
  const Session = useSelector((state: RootState) => state.session.isLogin);
  return (
    <div className="relative w-[100vw]">
      <div className="sm:hidden  bg-black shadow-xl h-[8vh] fixed bottom-0 left-0 right-0 z-10">
        <ul className="flex w-full h-full justify-around items-center p-3">
          <li>
            <a href="/home">
              <HomeIcon className="h-6 w-6 text-white" />
            </a>
          </li>
          <li>
            <a href="/home">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </a>
          </li>
          <li>
            <a href="/home">
              <PlusCircleIcon className="h-6 w-6 text-white" />
            </a>
          </li>
          <li>
            <a href="/home">
              <BellIcon className="h-6 w-6 text-white" />
            </a>
          </li>
          <li>
            <a href="/login">
              <UserCircleIcon className="h-6 w-6 text-white" />
            </a>
          </li>
        </ul>
      </div>
      <header className="z-40 fixed items-center w-[100%] h-16  shadow-2xl bg-transparent">
        <div className="relative z-20 bg-black flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center justify-between  w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <a className="flex-shrink-0" href="/">
              <img
                className="w-8 h-8"
                src="https://adaptleap.com/static/media/logo.56d43073712524198c06.webp"
                alt="Workflow"
              />
            </a>
            {Session ? (
              <></>
            ) : (
              <div className="sm:flex hidden  items-center justify-center space-x-4">
                <a
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/#"
                >
                  Home
                </a>
                <a
                  className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/#"
                >
                  Gallery
                </a>
                <a
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/#"
                >
                  Content
                </a>
                <a
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/#"
                >
                  Contact
                </a>
              </div>
            )}
            <div className="relative flex items-center justify-end  mr-1 sm:right-auto">
              {Session ? (
                <ProfileButtonMenu />
              ) : (
                <a
                  href="/login"
                  type="button"
                  className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Inicia Session
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
