import Logo from '../../assets/logo';
import avatar from '../../assets/images/image-avatar.png';
import CartButton from 'components/buttons/CartButton';
import CloseButton from 'components/buttons/CloseButton';
import MobileMenuButton from 'components/buttons/MobileMenu';
import Links from './Links';
import Media from 'react-media';
import Modal from 'components/dialogs/Modal';
import MenuDialog from 'components/dialogs/MenuDialog';
import { useState } from 'react';
import './NavBar.css';
import CartDialog from 'components/dialogs/CartDialog';
import { MOBILE_MENU_WIDTH } from 'shared/constans';

const NavBar = () => {
  const [menuDialog, setMenuDialog] = useState(false);
  const [cartDialog, setCartDialog] = useState(false);

  const links = [
    { name: 'Collections', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Woman', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav>
      <div className="nav-content">
        <Media query={`(max-width: ${MOBILE_MENU_WIDTH})`}>
          {(matches) =>
            matches && (
              <>
                <MobileMenuButton
                  cssClass="nav-menu-btn"
                  onClick={() => setMenuDialog(!menuDialog)}
                />
                <Modal
                  modalClass={
                    !menuDialog
                      ? 'mobile-menu-dialog'
                      : 'mobile-menu-dialog mobile-menu-dialog-open'
                  }
                  modalBodyClass="mobile-menu-body"
                  toggleModal={() => setMenuDialog(!menuDialog)}
                >
                  <CloseButton onClose={() => setMenuDialog(!menuDialog)} />
                  <MenuDialog links={links} />
                </Modal>
              </>
            )
          }
        </Media>

        <Logo />
        <Media query={`(min-width: ${MOBILE_MENU_WIDTH})`}>
          {(matches) =>
            matches && (
              <>
                <Links links={links} />
              </>
            )
          }
        </Media>

        <CartButton onBtnClick={() => setCartDialog(!cartDialog)} />
        <Modal
          modalClass={
            !cartDialog ? 'cart-dialog' : 'cart-dialog cart-dialog-open'
          }
          modalBodyClass="cart-dialog-body"
          toggleModal={() => setCartDialog(!cartDialog)}
        >
          <CartDialog />
        </Modal>

        <img alt="avatar" src={avatar} />
      </div>
    </nav>
  );
};

export default NavBar;
