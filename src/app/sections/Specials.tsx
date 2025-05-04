'use client';

import React, { useState, useEffect } from 'react';
import './special.css';
import SectionTitle from '../component/SectionTitle';
import { specialsFilters } from '../data/data';
import Preloader from '../component/Preloader';
import SpecialItem from '../component/SpecialItem';

// Define the type for a special item
interface Special {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
}

export default function Specials() {
  const [data, setData] = useState<Special[]>([]); // Use the Special[] type
  const [items, setItems] = useState<Special[]>([]); // Use the Special[] type

  const getSpecialsData = () => {
    fetch('http://localhost:3000/api/specials')
      .then((res) => res.json())
      .then((data: Special[]) => setData(data)) // Ensure the fetched data matches the Special[] type
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getSpecialsData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleFilterActive = (id: number) => {
    specialsFilters.forEach((filter) => {
      filter.active = filter.id === id;
    });
  };

  const handleSpecialChange = (id: number) => {
    handleFilterActive(id);
    const updatedItems = items.map((item) => {
      item.active = item.id === id;
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Specials" subtitle="Check our specials" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {specialsFilters.map((filter) => (
                <li className="nav-item" key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? 'active show' : ''}`}
                    onClick={() => handleSpecialChange(filter.id)}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {!items ? (
                <Preloader />
              ) : items.length > 0 ? (
                items.map((item) => <SpecialItem key={item.id} item={item} />)
              ) : (
                <Preloader />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}