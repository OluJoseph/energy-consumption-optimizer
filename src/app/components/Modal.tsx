import React from "react";

/**
 * This Modal component always renders a centered div that contains the child component
 * it also has a non-visible fixed div such that when clicked outside the main component the modal closes
 */

const Modal = ({ children, closeModal }: any) => {
  function handleCloseModal(e: any) {
    closeModal && closeModal();
  }
  return (
    <div className="fixed sm:px-4 top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
      <div
        onClick={handleCloseModal}
        className="h-full w-full absolute backdrop-blur-[1px] backdrop-brightness-75"
      ></div>

      <div className="relative sm:min-w-[400px] w-[70%] bg-white dark:bg-gray-900 h-full sm:h-fit z-50">
        {children}
      </div>
    </div>
  );
};

export default Modal;
