import React from 'react';

interface ModalPopupProps {
  message: string;
  onClose: () => void;
}

const ModalPopup: React.FC<ModalPopupProps> = ({ message, onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5 text-white'>
        <div className='bg-black bg-opacity-60 rounded-md p-5'>
          <p>{message}</p>
        </div>
        <button onClick={onClose} className='bg-white text-black rounded-md p-2'>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;
