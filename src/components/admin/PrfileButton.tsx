import React, { useState, useEffect, useRef } from "react";
import MenuNav from "./MenuNab";

export default function ProfileButtonMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    // Agrega el event listener cuando el menú está visible
    if (menuVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center hover:text-gray-200"
        onClick={handleMenuClick}
      >
        <img
          alt="profil"
          src="https://www.w3schools.com/howto/img_avatar.png"
          className="mx-auto object-cover rounded-full h-10 w-10 "
        />
      </button>
      {menuVisible && (
        <div className="absolute shadow-2xl bg-white top-0 right-[0] mt-11 transition duration-500">
          <MenuNav />
        </div>
      )}
    </div>
  );
}
