import React from 'react';
import './heroBtn.css';

export default function HeroBtn({ name, target }: { name: string; target: string }) {
  const handleScrollTo = (target: string) => {
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`}
    >
      {name}
    </a>
  );
}