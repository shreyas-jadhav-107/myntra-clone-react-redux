import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import Button from "react-bootstrap/Button";
import { MdOutlineAddCircleOutline, MdOutlineDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  // console.log("bagItems.id", bagItems.indexOf(item.id));
  const elementFount = bagItems.indexOf(item.id) >= 0;
  // console.log("elementFount", item.id, elementFount);

  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFount ? (
          <Button
            className="btn-add-bag"
            variant="danger"
            onClick={handleRemoveFromBag}
          >
            <MdOutlineDelete /> Remove from Bag
          </Button>
        ) : (
          <Button
            className="btn-add-bag"
            variant="success"
            onClick={handleAddToBag}
          >
            <MdOutlineAddCircleOutline /> Add to Bag
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
