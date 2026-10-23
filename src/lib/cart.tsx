import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type CartValue = { items: string[]; add: (id: string) => void; remove: (id: string) => void; clear: () => void };
const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('yuzersef.cart') || '[]') as string[];
      return saved.slice(0, 1);
    } catch { return []; }
  });
  useEffect(() => localStorage.setItem('yuzersef.cart', JSON.stringify(items)), [items]);
  const value = useMemo(() => ({
    items,
    add: (id: string) => setItems((current) => current[0] === id ? current : [id]),
    remove: (id: string) => setItems((current) => current.filter((item) => item !== id)),
    clear: () => setItems([]),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error('useCart must be used inside CartProvider');
  return value;
}
