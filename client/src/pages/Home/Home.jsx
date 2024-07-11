import React, { useState } from "react";
import "./Home.css";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <React.Fragment>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
    </React.Fragment>
  );
};

export default Home;
