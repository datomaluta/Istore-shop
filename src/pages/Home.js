import React, { Fragment } from "react";
import NewProductList from "../copmponents/newProducts/newProductList/NewProductList";
import Slider from "../copmponents/slider/Slider";

const Home = () => {
  const sliderData = [
    {
      src: "/sliderImages/sliderimg1.jpg",
      title: "image 1",
      discount: "60",
      header: "Winter Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg2.jpg",
      title: "image 2",
      discount: "80",
      header: "Spring Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg3.jpg",
      title: "image 3",
      discount: "20",
      header: "Autumn Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg4.jpg",
      title: "image 4",
      discount: "80",
      header: "Summer Collection",
      lightText: "The Best of 2022",
    },
  ];

  return (
    <>
      <Slider sliderData={sliderData} />
      <NewProductList />
    </>
  );
};
// istore\src\assets\slider\sliderImages\sliderimg2.jpg
export default Home;
