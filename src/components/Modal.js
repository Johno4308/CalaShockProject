import React, { useRef, useEffect } from "react";

//this if for image zooming, hope this is what was required by the technical
//the useRef/useEffect implementation it to get rid of the zoomed image by clicking else where

const Modal = ({ open, onClose, modalData }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  if (!open) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="img-responsive rounded mx-auto d-block border mt-3 p-3 bg-red"
        ref={wrapperRef}
      >
        <img src={modalData} />
      </div>
    </>
  );
};

export default Modal;
