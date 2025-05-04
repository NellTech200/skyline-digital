'use client';

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import './hero.css';
import HeroBtn from '../component/HeroBtn';

export default function Hero() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
    });

    // Cleanup on component unmount
    return () => {
      lightbox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Skyline Digital</span>
            </h1>
            <h2>Empowering the Digital Generation</h2>
            <h6>
              Learn. Build. Thrive. From Crypto to AI, Skyline Digital is your gateway to mastering the digital economy.
            </h6>

            <div className="btns">
              <HeroBtn name="Get Started" target="menu" />
              <HeroBtn name="Book a Meeting" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://youtu.be/swXWUfufu2w"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}