export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  category: string;
  type: TransactionType;
}

export type Role = 'Viewer' | 'Admin';
