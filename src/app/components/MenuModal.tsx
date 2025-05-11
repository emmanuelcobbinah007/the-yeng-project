import React from "react";
import { IoMdClose } from "react-icons/io";

interface MenuModalProps {
  handleClose: () => void;
  animateModal: boolean;
}

const MenuModal: React.FC<MenuModalProps> = ({ handleClose, animateModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        animateModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-full h-full bg-blue-50 shadow-lg transition-transform duration-300 transform ${
          animateModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <IoMdClose
            size={30}
            onClick={handleClose}
            className="cursor-pointer text-blue-900 hover:text-blue-700 transition-colors"
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col justify-center items-center h-[80%] p-6">
          <ul className="space-y-6 text-center">
            {["The Man", "The Vision", "The Experience", "The Reason"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Campaign Logo */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/images/logo1nobg.png"
            alt="Campaign Logo"
            className="w-24 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;