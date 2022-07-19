import React from 'react'

function Modal(props) {
  return (
    <div className='modal-btn-container'>
      <button className="open-modal-btn" onClick={props.handleDisplay}>+ Add {props.title}</button>

    </div>
  )
}

export default Modal
