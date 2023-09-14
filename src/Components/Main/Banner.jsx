import React from "react";
import "./banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerCard = () => {
  const bannerData = [
    {
      id: 1,
      cover: "./banner/banner4.jpeg",
    },
    {
      id: 2,
      cover: "./banner/banner3.jpeg",
    },
    {
      id: 3,
      cover: "./banner/banner2.jpeg",
    },
    {
      id: 4,
      cover: "./banner/banner1.jpeg",
    },
  ];
  return (
    <>
      <div className="Banner-box">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {bannerData.map((image) => {
            return (
              <Link to={`/video/${"64cffee700bad552e8dcd509"}`} key={image.id}>
                <div className="banner-img">
                  <img src={image.cover} alt="" />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default BannerCard;
