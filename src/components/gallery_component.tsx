import React from 'react'
import u1 from "/images/1.jpg"
import u2 from "/images/2.jpg"
import u3 from "/images/3.jpg"
import u4 from "/images/4.jpg"
import u5 from "/images/5.jpg"
import u6 from "/images/6.jpg"
import u7 from "/images/7.jpg"
import u8 from "/images/8.jpg"
import u9 from "/images/9.jpg"
import u10 from "/images/10.jpg"
import u11 from "/images/11.jpg"
import u12 from "/images/12.jpg"
import u13 from "/images/13.jpg"
import u14 from "/images/14.jpg"
import u15 from "/images/15.jpg"
import u16 from "/images/16.jpg"
import "./product_component.css"

export default function GalleryComponent() {
  const img = [
    {
      id: 1,
      img: u1,
    },
    {
      id: 2,
      img: u2,
    },
    {
      id: 3,
      img: u3,
    },
    {
      id: 4,
      img: u4,
    },
    {
      id: 5,
      img: u5,
    },
    {
      id: 6,
      img: u6,
    },
    {
      id: 7,
      img: u7,
    },
    {
      id: 8,
      img: u8,
    },
    {
      id: 9,
      img: u9,
    },
    {
      id: 10,
      img: u10,
    },
    {
      id: 11,
      img: u11,
    },
    {
      id: 12,
      img: u12
    },
    {
      id: 13,
      img: u13,
    },
    {
      id: 14,
      img: u14,
    },
    {
      id: 15,
      img: u15,
    },
    {
      id: 16,
      img: u16,
    },
  ];

  const itemElements = [];

  img.forEach((item) => {
    return itemElements.push(
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg box" key={item.id}>
        <img className="rounded-t-lg" src={item.img} alt="" />
      </div>)
  });

  return <div className='flex flex-wrap gap-4 justify-center'>{itemElements}</div>;

}
