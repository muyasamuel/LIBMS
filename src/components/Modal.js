
import './Modal.css';
import { ReactDOM } from 'react';


const ModalOverlay = ({children}) => {
    return (
        <div className='modal'>
         <div className='content'>{children}</div>
        </div>

    )};
    

const Modal = ({children}) => {
  return (
    ReactDOM.createPortal(<ModalOverlay> {children}</ModalOverlay>, document.getElementById('modal'))
    
  )
}

export default Modal