import React from "react";
import { useContext } from "react";
import { WishContext } from "../../context/WishProvider";
import EmptyComponent from "../empty/EmptyComponent";
import "./WishList.css";
import WishListItem from "./WishListItem";
const WishListModal = () => {
  const { wishList } = useContext(WishContext);

  return (
    <div
      className="modal fade right"
      id="wishListModal"
      tabIndex="-1"
      aria-labelledby="wishListModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-wish modal-dialog-scrollable">
        <div className="modal-content modal-contentWish">
          <div className="modal-header cover">
            <div className="d-flex align-items-center">
              <h5 className="modal-title" id="wishListModalLabel">
                Wish List
              </h5>
              <i className="fa-solid fa-heart ms-2"></i>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {wishList.length > 0 ? (
              wishList.map((wishItem) => (
                <WishListItem key={wishItem.id} wishItem={wishItem} />
              ))
            ) : (
              <EmptyComponent cartTitle={"Wish list"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListModal;
