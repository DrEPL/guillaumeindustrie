import React from 'react'
import PropTypes from 'prop-types'
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

export default function ProductsComponent() {
  const img = [
    {
      id: 1,
      img: u1,
      title: "title1",
      detail: "lorem1"
    },
    {
      id: 2,
      img: u2,
      title: "title2",
      detail: "lorem2"
    },
    {
      id: 3,
      img: u3,
      title: "title3",
      detail: "lorem3"
    },
    {
      id: 4,
      img: u4,
      title: "title4",
      detail: "lorem4"
    },
    {
      id: 5,
      img: u5,
      title: "title5",
      detail: "lorem5"
    },
    {
      id: 6,
      img: u6,
      title: "title6",
      detail: "lorem6"
    },
    {
      id: 7,
      img: u7,
      title: "title7",
      detail: "lorem7"
    },
    {
      id: 8,
      img: u8,
      title: "title8",
      detail: "lorem8"
    },
    {
      id: 9,
      img: u9,
      title: "title9",
      detail: "lorem9"
    },
  ];

  const itemElements = [];

  img.forEach((item) => {
    return itemElements.push(
      <div className="max-w-xs h-300 bg-white border border-gray-200 rounded-lg box" key={item.id}>
        <img className="rounded-t-lg h-1-2" src={item.img} alt="" />
        <div className="px-4 py-2">
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-700 dark:text-white">{item.title}</h5>
          <p className="mb-3 font-normal text-xs text-gray-600 dark:text-gray-400">{item.detail}</p>
        </div>
      </div>)
  });

  return <div className='flex flex-wrap gap-4 justify-center'>{itemElements}</div>;

}

ProductsComponent.propTypes = {

}
