import CloseIcon from '../../assets/close';

interface CloseButtonProps {
  onClose(): void;
  btnClass?: string;
  iconClass?: string;
  color?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  btnClass,
  color,
  iconClass,
}) => {
  return (
    <button aria-label="close-dialog" className={btnClass} onClick={onClose}>
      <CloseIcon color={color} iconClass={iconClass} />
    </button>
  );
};

export default CloseButton;
