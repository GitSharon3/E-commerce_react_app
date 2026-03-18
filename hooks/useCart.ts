"use client";

import {
  addToCart,
  clearCart,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartSubtotalCents,
  updateQuantity,
} from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const count = useAppSelector(selectCartCount);
  const subtotalCents = useAppSelector(selectCartSubtotalCents);

  return {
    items,
    count,
    subtotalCents,
    add: (payload: Parameters<typeof addToCart>[0]) => dispatch(addToCart(payload)),
    remove: (payload: Parameters<typeof removeFromCart>[0]) =>
      dispatch(removeFromCart(payload)),
    updateQuantity: (payload: Parameters<typeof updateQuantity>[0]) =>
      dispatch(updateQuantity(payload)),
    clear: () => dispatch(clearCart()),
  };
}
