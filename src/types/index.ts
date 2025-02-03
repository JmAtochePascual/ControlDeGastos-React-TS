export type TCategory = {
  id: string;
  name: string;
  icon: string;
};

export type TExpense = {
  id: string;
  amount: number;
  category: string;
  date: string;
};