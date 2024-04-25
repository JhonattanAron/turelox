import {
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <>
      <div className="sm:hidden  rounded-xl m-2 bg-black shadow-xl h-[8vh] fixed bottom-0 left-0 right-0 z-10">
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
      <header className="sm:block hidden none z-40  fixed items-center w-[100%] h-16  shadow-2xl bg-transparent">
        <div className="relative z-20 bg-black flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center justify-around  w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <a className="flex-shrink-0" href="/">
              <img
                className="w-8 h-8"
                src="https://adaptleap.com/static/media/logo.56d43073712524198c06.webp"
                alt="Workflow"
              />
            </a>
            <div className="flex items-center justify-center space-x-4">
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
            <div className="relative flex items-center justify-end  p-1  mr-4 sm:right-auto">
              <a href="/" className="relative block">
                <img
                  alt="profil"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
