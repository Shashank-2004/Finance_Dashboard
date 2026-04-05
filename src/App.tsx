import { useState } from 'react';
import { useFinance } from './context/FinanceContext';
import { LayoutDashboard, Moon, Sun, UserCog, UserCheck, Plus } from 'lucide-react';
import { DashboardOverview } from './components/DashboardOverview';
import { TransactionList } from './components/TransactionList';
import { InsightsSection } from './components/InsightsSection';
import { AddTransactionModal } from './components/AddTransactionModal';

function App() {
  const { state, dispatch } = useFinance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen pb-12">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LayoutDashboard className="h-6 w-6 text-primary mr-2" />
              <span className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">FinanceDash</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-700 transition"
                title="Toggle Dark Mode"
              >
                {state.darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="bg-gray-100 dark:bg-gray-700 flex rounded-md p-1">
                <button
                  onClick={() => dispatch({ type: 'SET_ROLE', payload: 'Viewer' })}
                  className={`px-3 py-1 flex items-center text-sm font-medium rounded-sm transition ${
                    state.role === 'Viewer' 
                      ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <UserCheck size={16} className="mr-1.5 hidden sm:inline" />
                  Viewer
                </button>
                <button
                  onClick={() => dispatch({ type: 'SET_ROLE', payload: 'Admin' })}
                  className={`px-3 py-1 flex items-center text-sm font-medium rounded-sm transition ${
                    state.role === 'Admin' 
                      ? 'bg-white dark:bg-gray-600 shadow-sm text-primary dark:text-white' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <UserCog size={16} className="mr-1.5 hidden sm:inline" />
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Financial Overview</h1>
          {state.role === 'Admin' && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm"
            >
              <Plus size={18} className="mr-1.5" />
              Add Transaction
            </button>
          )}
        </div>
        
        <DashboardOverview />
        <InsightsSection />
        <TransactionList />
      </main>

      <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
