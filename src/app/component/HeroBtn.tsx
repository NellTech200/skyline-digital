import React from 'react';
import './heroBtn.css';

export default function HeroBtn({ name, target }: { name: string; target: string }) {
  return (
    <a
      onClick={() => console.log(`Scrolling to ${target}`)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`}
    >
      {name}
    </a>
  );
}