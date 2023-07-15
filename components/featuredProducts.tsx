"use client"
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from './ui/bestSellingCard';
import { useAppSelector } from '@<prefix>/app/store/hooks';


const FeaturedProducts = ()=> {
    // my data

      const bestSell =useAppSelector((state) =>state.products.slice(0,11));
    // carousel setting
    var settings = {
       
            dots: true,
            arrows:false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
           responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
      };
  return (
    <div className='mb-[100px] mt-[100px]'>  
     {/* Heading */}
    <div className="text-center mb-10">
  <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-center capitalize">
    Featured Products
  </h1>
 
  <div className="flex mt-2 justify-center">
    <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
  </div>
</div>
{/* carousel */}
<Slider {...settings}>
  {
    bestSell.map((items:any,i) => (
      <BestSellingCard
      key={i}
       src={items.image[0]}
        alt ={items.title}
         title={items.title}
          description = {items.description}
           price ={items.price}
           category={items.category}
           slug={items.slug}
           discount = {items.discount}
/>    ))
  }

 
        </Slider>
</div>
  )
}

export default FeaturedProducts;