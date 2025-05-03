import React from 'react';
import './chefs.css';
import SectionTitle from '../component/SectionTitle';
import ChefsItem from '../component/ChefsItem';

async function getChefsData() {
    const res = await fetch('http://localhost:3000/api/chefs');
    return res.json();
}

export default async function Chefs() {
    const items: [] = await getChefsData();
  return (
    <section id='chefs' className='chefs'>
        <div className='container' data-aos='fade-up'>
            <SectionTitle title='Our Team' subtitle='Our Professionals' />

            <div className='row'>
                {items && items.length > 0 && items.map(
                    (item: {
                        id: number;
                        name: string;
                        photo: string;
                        position: string;
                        delay: string;
                    }) => <ChefsItem key={item.id} item={item} />
                )}
            </div>
        </div>
    </section>
  )
}
