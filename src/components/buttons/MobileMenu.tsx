import MenuIcon from '../../assets/menu';

interface MobileMenuProps {
  onClick(): void;
  cssClass?: string;
}

const MobileMenuButton: React.FC<MobileMenuProps> = ({
  onClick,
  cssClass = '',
}) => {
  return (
    <button aria-label="mobile-menu" className={cssClass} onClick={onClick}>
      <MenuIcon />
    </button>
  );
};

export default MobileMenuButton;
