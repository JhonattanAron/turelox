import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Logout } from "../../redux/Slices/Session";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MenuNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Handlelogaut = () => {
    dispatch(Logout());
    navigate("/login");
  };
  return (
    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
      <div
        className="py-1 "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="/profile"
          className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <span className="flex flex-col">
            <span>Profile</span>
          </span>
        </a>
        <a
          href="/config"
          className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <span className="flex flex-col">
            <span>Mastercard</span>
          </span>
        </a>
        <button
          onClick={Handlelogaut}
          className="block px-4 py-2 w-full text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          <span className="flex">
            <span className="flex">
              <ArrowRightEndOnRectangleIcon className="mr-3" width={25} />
              Cerrar Sesion
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
