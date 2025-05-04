import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './nav.css';
import { navs } from '../data/data';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (section: string) => {
    const header = document.querySelector('#header') as HTMLElement;
    const offset = header.offsetHeight;
    const targetEl = document.querySelector('#' + section) as HTMLElement;

    if (pathname === '/') {
      const elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  const handleNavActive = () => {
    const position = scroll + 200;

    setNavList(
      navList.map((nav) => {
        nav.active = false;
        const targetSection = document.querySelector(
          '#' + nav.target
        ) as HTMLElement;

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  };

  useEffect(() => {
    handleNavActive();
  }, [scroll]);

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${
        open ? 'navbar-mobile' : undefined
      }`}
    >
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${
                nav.active ? 'active' : undefined
              }`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === 'Home' ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}