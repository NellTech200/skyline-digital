import React from 'react';
import aboutImage from '../../../public/assets/images/hero.jpg';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="" />
            </div>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              We empower dreamers, creators, and entrepreneurs with future-ready
              skills in crypto, digital marketing, web development, and more.
              Whether you&apos;re starting out or scaling up, Skyline Digital helps
              you grow with clarity and confidence.
            </h3>

            <p className="fst-italic">We emphasize on</p>

            <ul>
              <li>
                <i className="bi bi-check-circle"></i>Skill Empowerment,
              </li>

              <li>
                <i className="bi bi-check-circle"></i>Innovation & Growth,
              </li>

              <li>
                <i className="bi bi-check-circle"></i>Accessibility & Clarity,
              </li>
            </ul>

            <p>
              At Skyline Digital, we simplify the digital world to spark
              transformation. With the right tools and clear guidance, anyone
              can rise, create, and thrive in today&apos;s digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}