// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{ zIndex: 1000 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black p-5 rounded-lg max-w-lg w-full">
        {children}
        <button className="mt-4 p-2 bg-gray-800 text-white rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
