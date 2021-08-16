import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotalAmount = () => {
        let totalAmount = 0
        cartList.forEach(item => {
          totalAmount += item.quantity * item.price
        })
        return totalAmount
      }

      return (
        <div className="cart-summary">
          <h1 className="order-total-title">
            Order Total:
            <span className="total-amount">Rs {getTotalAmount()}/- </span>
          </h1>
          <p className="total-in-cart-count">
            {cartList.length > 1
              ? `${cartList.length} Items `
              : `${cartList.length} Item `}
            in cart
          </p>
          <button type="button" className="Checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

// if (cartList.length > 1) {
//   totalAmount = cartList.reduce(
//     (acc, curr) => acc.quantity * acc.price + curr.quantity * curr.price,
//   )
//   return totalAmount
// }
// cartList.forEach(item => {
//   totalAmount += item.price * item.qty
// })
// return totalAmount
