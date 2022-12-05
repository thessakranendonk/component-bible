import clsx from 'clsx';
import { createRef, useState } from 'react';
import { CarouselProps } from '../types/interfaces.types';

const ArrowedCarousel: React.FC<CarouselProps> = ({ carouselClassName, alt, images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const refs = images.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeftButton ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? 'left' : 'right'}`}>
        {isLeftButton ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
    <div className={clsx('flex justify-center items-center mx-auto', carouselClassName)}>
      <div className="relative w-full">
        <div className={clsx('flex overflow-x-hidden snap-mandatory snap-x', carouselClassName)}>
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className={clsx('object-cover ', carouselClassName)} alt={alt} />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default ArrowedCarousel;
