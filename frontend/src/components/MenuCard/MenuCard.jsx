import "./MenuCard.css";
import { menu_card_list } from "../../assets/assets";

const MenuCard = () => {
  return (
    <div className="menu-card" id="menu-card">
      <h1>Explore Menu</h1>
      <div className="menu_card_items">
        {/* Importing and displaying menu card images */}
        {menu_card_list.map((item, index) => {
          return (
            <div className="menu_card_img" key={index}>
              <img src={item.menu_card_img} alt="" width="350" />
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default MenuCard;
