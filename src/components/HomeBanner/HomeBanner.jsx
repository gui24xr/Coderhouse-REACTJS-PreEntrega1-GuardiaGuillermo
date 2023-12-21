import React from "react";
import { NavLink } from "react-router-dom";
import SliderContainer from "../SliderContainer/SliderContainer";
import { getCategoriesFromProductList } from "../../DATA/data_manager";
import { getImageCategory } from "../../DATA/categories_images";

const HomeBanner = () => {
  const bannersList = [];
  let isImage = false;
  let picForBanner = "none"
  let classForBanner = "none"

  getCategoriesFromProductList().forEach((category) => {

    if (getImageCategory(category) == null ){
        bannersList.push(
            <div
                className="my-8 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-24 px-10 object-fill">
                <div className="md:w-1/2">
                <NavLink 
                    to={"categories/" + category + ""}
                    className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-black">
                    {category}
                </NavLink>
                </div>
            </div>
            ) 
    }
    else {
        picForBanner = "url(" + getImageCategory(category) + ")"
        bannersList.push(
        <div
            className="h-40 my-8 bg-cover bg-center text-white py-24 px-10 object-fill"  style={{ backgroundImage: picForBanner }}>
            <div className="md:w-1/2">
            <NavLink 
                to={"categories/" + category + ""}
                className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">
                {category}
            </NavLink>
            </div>
        </div>
        )
        }

  });

  return (
    <>
      <SliderContainer itemList={bannersList} time={Number(8000)} />
    </>
  );
};

export default HomeBanner;

//className="my-8 bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"  style={{ backgroundImage: picForBanner }}>