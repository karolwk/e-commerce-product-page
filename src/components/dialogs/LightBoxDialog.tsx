import './LightBoxDialog.css';
import Modal from './Modal';
import DesktopGallery from 'components/galleries/DesktopGallery';
import { ItemDetails } from 'state/reducers';
import CloseButton from 'components/buttons/CloseButton';

interface LightBoxDialogProps {
  item: ItemDetails;
  toggleModal(): void;
}

const LightBoxDialog: React.FC<LightBoxDialogProps> = ({
  item,
  toggleModal,
}) => {
  return (
    <Modal
      modalClass="lbox-modal"
      modalBodyClass="lbox-modal-body"
      toggleModal={toggleModal}
    >
      <DesktopGallery item={item} lightbox={true} />
      <CloseButton
        btnClass="lbox-close-btn"
        iconClass="lbox-close-icon"
        color="white"
        onClose={toggleModal}
      />
    </Modal>
  );
};

export default LightBoxDialog;
