import React from 'react';
import Card from '../Card/Card';
import "./List.scss";

const List = () => {
    const data = [
        {id:1,
        img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    {
        id:2,
        img: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "coat",
        isNew: true,
        oldPrice: 19,
        price:12

    },
    {
        id:3,
        img: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "skirt",
        isNew: true,
        oldPrice: 19,
        price:12

    },
    {
        id:4,
        img: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "shirt",
        isNew: true,
        oldPrice: 19,
        price:12

    },
    {
        id:5,
        img: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "pants",
        isNew: true,
        oldPrice: 19,
        price:12

    },
    {
        id:6,
        img: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "caps",
        isNew: true,
        oldPrice: 19,
        price:12

    },
    ]
    return (
        <div className="list">
          {data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      );
    };


export default List