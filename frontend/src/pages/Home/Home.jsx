import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import MenuCard from "../../components/MenuCard/MenuCard";
import Awards from "../../components/Awards/Awards";
import Guests from "../../components/Guests/Guests";

const Home = () => {
  // Menu Sorting
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodMenu category={category} />
      <MenuCard />
      <Awards />
      <Guests />
    </div>
  );
};

export default Home;
