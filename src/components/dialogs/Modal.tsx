import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  modalClass: string;
  modalBodyClass: string;
  toggleModal(): void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  modalClass,
  modalBodyClass,
  toggleModal,
}) => {
  let modalDiv = useMemo(() => {
    return document.createElement('div');
  }, []);

  useEffect(() => {
    document.body.appendChild(modalDiv);
    return () => {
      document.body.removeChild(modalDiv);
    };
  }, [modalDiv]);

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-label="dialog window"
      className={modalClass}
      onClick={() => toggleModal()}
    >
      <div className={modalBodyClass} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalDiv
  );
};

export default Modal;
