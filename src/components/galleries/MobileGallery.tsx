import NextButton from 'components/buttons/NextButton';
import PrevButton from 'components/buttons/PrevButton';
import { useState } from 'react';
import { ItemDetails } from '../../state/reducers';
import './MobileGallery.css';
interface MobileGalleryProps {
  item: ItemDetails;
}

const MobileGallery: React.FC<MobileGalleryProps> = ({ item }) => {
  const images = item.images;
  const [actualImg, setActualImg] = useState(0);

  const navigation = (n: number): void => {
    if (n >= images.length) {
      setActualImg(0);
      return;
    }
    if (n < 0) {
      setActualImg(images.length - 1);
      return;
    }
    setActualImg(n);
  };

  return (
    <div className="mg-main-image">
      <PrevButton
        btnClass="mg-prev-btn"
        iconClass="mg-btn-icon"
        onClick={() => navigation(actualImg - 1)}
      />
      <NextButton
        btnClass="mg-next-btn"
        iconClass="mg-btn-icon"
        onClick={() => navigation(actualImg + 1)}
      />

      <img alt={item.name} src={item.images[actualImg].mainPath} />
    </div>
  );
};

export default MobileGallery;
