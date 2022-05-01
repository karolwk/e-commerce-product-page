import Links from 'components/navigation/Links';
import './MenuDialog.css';

interface MenuDialogProps {
  links: {
    name: string;
    href: string;
  }[];
}

const MenuDialog: React.FC<MenuDialogProps> = ({ links }) => {
  return (
    <div className="md-links">
      <Links links={links} />
    </div>
  );
};

export default MenuDialog;
