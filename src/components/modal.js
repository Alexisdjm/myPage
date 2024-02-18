import images from "../images/exporting";

const Modal = ({open, content}) => {
    
    return(
        <div className={!open ? 'blur-bg-modal' : 'blur-bg-modal show-fade'}>
            <div className="flex-center">
                <h4 className="modal-text simple-flex align-center">{content}</h4>
                <img className="modal-icon" src={images.check} alt="icon"></img>
            </div>
        </div>
    )
}

export default Modal
