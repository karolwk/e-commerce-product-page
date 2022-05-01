import NextButton from 'components/buttons/NextButton';
import PrevButton from 'components/buttons/PrevButton';
import { useState } from 'react';
import { ItemDetails } from '../../state/reducers';
import './DesktopGallery.css';

interface DesktopGalleryProps {
  item: ItemDetails;
  lightbox?: boolean;
  onBodyClick?(): void;
}

const DesktopGallery: React.FC<DesktopGalleryProps> = ({
  item,
  onBodyClick,
  lightbox = false,
}) => {
  const images = item.images;
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [actualImage, setActualImage] = useState(0);

  const thumbnails = images.map((image, index) => {
    return (
      <div
        key={image.thumbnailPath.match(/\/([^.]+)/g)?.toString()}
        className={selectedThumbnail === index ? 'dg-active-img' : ''}
        role="button"
      >
        <img
          alt={item.name + ' thumbnail ' + (index + 1)}
          src={image.thumbnailPath}
          onClick={() => {
            setSelectedThumbnail(index);
            setActualImage(index);
          }}
        />
      </div>
    );
  });

  const navigation = (n: number): void => {
    // Navigation for lightbox
    if (n >= images.length) {
      setActualImage(0);
      setSelectedThumbnail(0);
      return;
    }
    if (n < 0) {
      setActualImage(images.length - 1);
      setSelectedThumbnail(images.length - 1);
      return;
    }
    setActualImage(n);
    setSelectedThumbnail(n);
  };

  return (
    <div className="dg-main-container">
      <div className="dg-image" onClick={onBodyClick}>
        <img alt={item.name} src={images[actualImage].mainPath} />
      </div>
      <div className="dg-thumbnails">{thumbnails}</div>
      {/* Lightbox buttons */}
      {lightbox && (
        <>
          <PrevButton onClick={() => navigation(actualImage - 1)} />
          <NextButton onClick={() => navigation(actualImage + 1)} />
        </>
      )}
    </div>
  );
};

export default DesktopGallery;
