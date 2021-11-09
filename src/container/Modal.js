import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {

  let handleHideModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <div className="backdrop" onClick={handleHideModal}>
      <img src={selectedImg} alt="bigger picture"/>
    </div>
  )
}

export default Modal;
