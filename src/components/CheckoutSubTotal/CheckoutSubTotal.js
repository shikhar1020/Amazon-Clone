import React from "react";
import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
import "./style.scss";

function CheckoutSubTotal() {
  //   const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            {/* <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p> */}
            <small className="subtotalGift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CheckoutSubTotal;
