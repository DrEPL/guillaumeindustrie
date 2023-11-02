import React from 'react'
import u1 from "/ustensiles/1.jpg"
import u2 from "/ustensiles/2.jpg"
import u3 from "/ustensiles/3.jpg"
import u4 from "/ustensiles/4.jpg"
import u5 from "/ustensiles/5.jpg"
import u6 from "/ustensiles/6.jpg"
import u7 from "/ustensiles/7.jpg"
import u8 from "/ustensiles/8.jpg"
import u9 from "/ustensiles/9.jpg"
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
