import MobileGallery from 'components/galleries/MobileGallery';
import DesktopGallery from 'components/galleries/DesktopGallery';
import LightBoxDialog from 'components/dialogs/LightBoxDialog';

import { ItemDetails } from '../../state/reducers';
import ProductDetails from './ProductDetails';
import Media from 'react-media';
import { DESKTOP_VIEW } from 'shared/constans';
import './ProductPage.css';
import { useState } from 'react';
interface ProductPageProps {
  item: ItemDetails;
}

const ProductPage: React.FC<ProductPageProps> = ({ item }) => {
  const [lightBoxModal, toggleLightBoxModal] = useState(false);
  return (
    <main>
      {/* For demonstration mocked data is used from exampleItems*/}
      <Media queries={{ small: `(max-width: ${DESKTOP_VIEW})` }}>
        {(matches) =>
          matches.small ? (
            <MobileGallery item={item} />
          ) : (
            <>
              <DesktopGallery
                item={item}
                onBodyClick={() => toggleLightBoxModal(!lightBoxModal)}
              />
              {lightBoxModal && (
                <LightBoxDialog
                  item={item}
                  toggleModal={() => toggleLightBoxModal(!lightBoxModal)}
                />
              )}
            </>
          )
        }
      </Media>

      <ProductDetails item={item} />
    </main>
  );
};

export default ProductPage;
