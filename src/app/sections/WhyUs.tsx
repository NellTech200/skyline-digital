'use client'

import React, { useState, useEffect } from 'react';
import './whyUs.css';
import WhyUsCard from '../component/WhyUsCard';
import SectionTitle from '../component/SectionTitle';

async function getWhyUsData() {
  try {
    const res = await fetch('/api/whyus');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default function WhyUs() {
  const [items, setItems] = useState<
    { id: number; title: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getWhyUsData();
      setItems(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title='Goal' subtitle='Our Goal'/>
        <div className="row">
          {items.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
