import {
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function LatMenu() {
  return (
    <div className="bg-black shadow-xl h-full xl:flex hidden left-0 bottom-0 ">
      <ul className="flex flex-col h-full justify-evenly  p-3">
        <li>
          <a
            className="flex py-10 px-5 hover:bg-gray-800 hover:shadow-gray-600 rounded-xl hover:shadow-xl duration-500"
            href="/"
          >
            <HomeIcon className="h-6 w-6 text-white" />
            <h2 className="text-xl mx-3 text-white">Home</h2>
          </a>
        </li>
        <li>
          <a
            className="flex py-10 px-5 hover:bg-gray-800 hover:shadow-gray-600 rounded-xl hover:shadow-xl duration-500"
            href="/pedidos"
          >
            <ShoppingBagIcon className="h-6 w-6 text-white" />
            <h2 className="text-xl mx-3 text-white">Pedidos</h2>
          </a>
        </li>
        <li>
          <a
            className="flex py-10 px-5 hover:bg-gray-800 hover:shadow-gray-600 rounded-xl hover:shadow-xl duration-500"
            href="/home"
          >
            <PlusCircleIcon className="h-6 w-6 text-white" />
            <h2 className="text-xl mx-3 text-white">Add</h2>
          </a>
        </li>
        <li>
          <a
            className="flex py-10 px-5 hover:bg-gray-800 hover:shadow-gray-600 rounded-xl hover:shadow-xl duration-500"
            href="/home"
          >
            <BellIcon className="h-6 w-6 text-white" />
            <h2 className="text-xl mx-3 text-white">Bell</h2>
          </a>
        </li>
        <li>
          <a
            className="flex py-10 px-5 hover:bg-gray-800 hover:shadow-gray-600 rounded-xl hover:shadow-xl duration-500"
            href="/profile"
          >
            <UserCircleIcon className="h-6 w-6 text-white" />
            <h2 className="text-xl mx-3 text-white">Profile</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
