import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartLineItem = {
  productId: string;
  variantId?: string;
  title: string;
  priceCents: number;
  imageUrl: string;
  quantity: number;
};

type CartState = {
  items: CartLineItem[];
};

const initialState: CartState = {
  items: [],
};

type AddToCartPayload = {
  item: Omit<CartLineItem, "quantity">;
  quantity?: number;
};

type UpdateQuantityPayload = {
  productId: string;
  variantId?: string;
  quantity: number;
};

type RemoveFromCartPayload = {
  productId: string;
  variantId?: string;
};

const getKey = (productId: string, variantId?: string) =>
  `${productId}::${variantId ?? ""}`;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const quantity = action.payload.quantity ?? 1;
      const incoming = action.payload.item;

      const incomingKey = getKey(incoming.productId, incoming.variantId);
      const existing = state.items.find(
        (i) => getKey(i.productId, i.variantId) === incomingKey,
      );

      if (existing) {
        existing.quantity += quantity;
        return;
      }

      state.items.push({
        ...incoming,
        quantity,
      });
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      const removeKey = getKey(action.payload.productId, action.payload.variantId);
      state.items = state.items.filter(
        (i) => getKey(i.productId, i.variantId) !== removeKey,
      );
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const updateKey = getKey(action.payload.productId, action.payload.variantId);
      const item = state.items.find(
        (i) => getKey(i.productId, i.variantId) === updateKey,
      );

      if (!item) return;

      item.quantity = Math.max(1, Math.floor(action.payload.quantity));
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  selectors: {
    selectCartItems: (cart) => cart.items,
    selectCartCount: (cart) => cart.items.reduce((sum, i) => sum + i.quantity, 0),
    selectCartSubtotalCents: (cart) =>
      cart.items.reduce((sum, i) => sum + i.quantity * i.priceCents, 0),
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const { selectCartItems, selectCartCount, selectCartSubtotalCents } =
  cartSlice.selectors;

export default cartSlice.reducer;
