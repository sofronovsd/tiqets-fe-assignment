import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;

  @media(max-width: 425px) {
    flex-direction: row;
    height: 136px;
    aspect-ratio: 3 / 4;
  }
`

type Props = {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <ProductImage ref={imgRef} src={isVisible ? src : ''} alt={alt} />
  );
};

export default LazyImage;
