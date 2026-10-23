export type OrderStatus = 'pending' | 'approved' | 'production' | 'delivery' | 'completed' | 'rejected';

export type Order = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  productId: string;
  referenceId: string;
  productName: string;
  quantity: number;
  sizes: string;
  color: string;
  placement: string;
  notes: string;
  fileName: string;
  designHelp: boolean;
  status: OrderStatus;
  ownerNote: string;
  nextAction: string;
  history: { status: OrderStatus; date: string; note: string }[];
};

const ORDER_KEY = 'yuzersef.orders.v1';

export function getOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(ORDER_KEY) || '[]') as Order[];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order): void {
  const orders = getOrders();
  localStorage.setItem(ORDER_KEY, JSON.stringify([order, ...orders]));
}

export function updateOrder(id: string, patch: Partial<Order>, historyNote?: string): void {
  const orders = getOrders().map((order) => {
    if (order.id !== id) return order;
    const next = { ...order, ...patch };
    if (historyNote) next.history = [{ status: next.status, date: new Date().toISOString(), note: historyNote }, ...order.history];
    return next;
  });
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
}

export function generateOrderId(): string {
  let candidate = '';
  do {
    const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
    candidate = `YZ-${new Date().getFullYear()}-${suffix}`;
  } while (getOrders().some((order) => order.id === candidate));
  return candidate;
}

export const statusLabels: Record<OrderStatus, { ar: string; en: string }> = {
  pending: { ar: 'قيد المراجعة', en: 'Pending review' },
  approved: { ar: 'تمت الموافقة', en: 'Approved' },
  production: { ar: 'قيد الإنتاج', en: 'In production' },
  delivery: { ar: 'خرج للتوصيل', en: 'Out for delivery' },
  completed: { ar: 'مكتمل', en: 'Completed' },
  rejected: { ar: 'مرفوض', en: 'Rejected' },
};
