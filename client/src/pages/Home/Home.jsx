import React, { useState } from "react";
import "./Home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import AppDownload from "../../component/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <React.Fragment>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </div>
    </React.Fragment>
  );
};

export default Home;
