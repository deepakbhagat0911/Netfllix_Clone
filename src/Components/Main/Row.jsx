import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Row.css";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Row = ({ data, title, query }) => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredData = data.filter((item) => item.type.includes(query));
    setFilterData(filteredData);
  }, [data, query]);
  console.log(data);
  return (
    <>
      <div className="row-title">
        <div>{title}</div>
        <Link to={"/all"}>
          <div>View All</div>
        </Link>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={3}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {filterData.map((item) => {
          return (
            <div className="img-box" key={item._id}>
              <Link to={`/${item._id}`}>
                <img src={item.thumbnail} alt="image" />
              </Link>
              <p>{item.title}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Row;
