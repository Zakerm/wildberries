import React from "react";
import MainBanner from "./MainBanner/MainBanner";
import MainSlider from "./MainSlider/MainSlider";
import CardPage from "./CardPage/CardPage";

const Main: React.FC = () => {
  return (
    <div className="main_container">
      <MainBanner />
      <MainSlider />
      <CardPage />
    </div>
  );
};

export default Main;
