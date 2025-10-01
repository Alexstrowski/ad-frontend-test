import { CartItem } from "@/reducers/cartReducer";

interface CartSummaryProps {
  cartItems: CartItem[];
  total: number;
}

const CartSummary = ({ cartItems, total }: CartSummaryProps) => {
  return (
    <div className="border border-stroke-secondary rounded-lg py-6 px-4 text-stroke-primary">
      <h2 className="text-xl font-bold  mb-3">Order Summary</h2>
      <p className="text-lg leading-6 mb-11">
        {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
      </p>

      <div className="space-y-3 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-lg leading-6 tracking-wide"
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-stroke-secondary pt-4 pb-5">
        <div className="flex justify-between items-center text-xl font-bold leading-6 tracking-wide">
          <span>Order Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
