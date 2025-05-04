import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import './menuItem.css';

export default function MenuItem({
  item,
}: {
  item: {
    id: number;
    name: string;
    preview: string;
    price: number;
    ingredients: string;
  };
}) {
  return (
    <div className="col-lg-6 menu-item pt-5">
      <Image
        src={item.preview}
        className="menu-img"
        alt={item.name}
        width={500} // Replace with the actual width of the image
        height={300} // Replace with the actual height of the image
      />
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
        <span>{item.price}</span>
      </div>
      <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  );
}