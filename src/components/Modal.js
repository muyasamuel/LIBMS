
import './Modal.css';
import { ReactDOM } from 'react';


export const ModalOverlay = ({children}) => {
    return (
        <div className='modal'>
         {children}
        </div>

    )};
    

const Modal = ({children}) => {
  return (
    ReactDOM.createPortal(<ModalOverlay> {children}</ModalOverlay>, document.getElementById('modal'))
    
  )
}

export default Modal