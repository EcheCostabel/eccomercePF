import * as Unicons from "@iconscout/react-unicons";

const ItemCount = ({ productDetail, quantity, setQuantity, carrito }) => {
  function addQuantityToCart(actionButton) {
    if (!carrito) {
      if (actionButton === "minus") {
        setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    } else {
      console.log("entro al carrito", productDetail);
      //dispatch(addProductToCart(productDetail, quantity));
    }
  }

  return (
    <div className="qty-box">
      <button
        className="cartButtons decrease"
        onClick={() => addQuantityToCart("minus")}
        disabled={quantity === 1}
      >
        <Unicons.UilMinus />
      </button>
      <input
        type="number"
        id="quantity_6347dd6ab108a"
        className="input-text qty text"
        step="1"
        min="1"
        max=""
        name="quantity"
        value={quantity}
        title="Qty"
        size="4"
        placeholder=""
        inputMode="numeric"
        readOnly={true}
      />
      <button
        className="cartButtons increase"
        onClick={() => addQuantityToCart("plus")}
        disabled={quantity === productDetail.stock}
      >
        <Unicons.UilPlus />
      </button>
    </div>
  );
};
export default ItemCount;
