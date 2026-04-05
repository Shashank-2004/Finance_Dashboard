import type { Transaction } from '../types';

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2026-03-25', amount: 5200, category: 'Salary', type: 'income', name: 'Tech Solutions LLC' },
  { id: '2', date: '2026-03-27', amount: 85, category: 'Transport', type: 'expense', name: 'Gas Station' },
  { id: '3', date: '2026-03-28', amount: 120.5, category: 'Food', type: 'expense', name: 'Trader Joe\'s' },
  { id: '4', date: '2026-04-01', amount: 1800, category: 'Rent', type: 'expense', name: 'Apartment Complex' },
  { id: '5', date: '2026-04-02', amount: 65, category: 'Entertainment', type: 'expense', name: 'Movie Theater' },
  { id: '6', date: '2026-04-02', amount: 450, category: 'Freelance', type: 'income', name: ' Upwork Client' },
  { id: '7', date: '2026-04-03', amount: 25, category: 'Food', type: 'expense', name: 'Coffee Shop' },
];
