import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "../components/styles.css"; // optional custom CSS

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sale 2025",
      subtitle: "Up to 50% off on selected products",
      image: "https://static.vecteezy.com/system/resources/thumbnails/048/909/710/small_2x/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg",
      link: "#products",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Check out the latest trends",
      image: "https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg",
      link: "#products",
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "Exclusive Offers",
      subtitle: "Limited time deals just for you",
      image: "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg",
      link: "#products",
      buttonText: "Grab Now",
    },
  ];

  return (
    <Carousel fade interval={5000} className="home-carousel">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id} className="carousel-item-full">
          <img
            className="d-block w-100 carousel-image"
            src={slide.image}
            alt={slide.title}
          />
          <Carousel.Caption className="banner-caption text-start">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <Button variant="primary" href={slide.link}>
              {slide.buttonText}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeSlider;