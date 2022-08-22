import React from 'react'
import './Modal.css'

const Modal = ({modalClose}) => {
    
    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTarget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }
    }
    return (
        <div className = "modal__container">
            <div className ="modal">
               <div className = "modalInput">
                <p>ID<input type ="text"></input></p>
                <p>PASSWORD<input type ="password"></input></p>
                <button className ="modal__button" onClick={modalClose} Modal Close></button>
                </div>
            </div>
        </div>
    )
}

export default Modal