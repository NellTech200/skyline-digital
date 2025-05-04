import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css'; // Ensure the CSS is imported
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({ item }: { item: { id: number; image: string } }) {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.gallery-lightbox',
    });

    // Cleanup on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className='col-lg-3 col-md-4'>
      <div className='gallery-item'>
        <a href={item.image} className='gallery-lightbox' data-gall='gallery-item'>
          <Image
            width={500}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={item.image}
            alt={`Gallery item ${item.id}`}
            className='img-fluid'
          />
        </a>
      </div>
    </div>
  );
}