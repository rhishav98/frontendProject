import React from "react";

import { useCart } from "react-use-cart";
import { useHistory } from "react-router-dom";

const Cart = () => {
  let history = useHistory();
  const buynow = () => {
    history.push("./Buynow.js");
  };

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h2 className="text-center"> Your cart is empty </h2>;
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart: ({totalUniqueItems}) total Items: ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.img}
                          alt=" "
                          style={{ height: "5rem" }}
                        />
                      </td>
                      <td> {item.title} </td> <td> {item.price} </td>
                      <td> Quantity({item.quantity}) </td>
                      <td>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-info ms-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2> Total Price: Rs {cartTotal} </h2>
          </div>
          <p>
            <div className="col-auto">
              <button
                className="btn btn-danger m-9"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>

              <button
                className="btn btn-active m-7"
                type="submit"
                onClick={buynow}
              >
                Buy Now
              </button>
            </div>
          </p>
        </div>
      </section>
    </>
  );
};

export default Cart;
