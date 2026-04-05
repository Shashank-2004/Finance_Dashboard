import { useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';

export function InsightsSection() {
  const { state } = useFinance();

  const insights = useMemo(() => {
    const expenses = state.transactions.filter(t => t.type === 'expense');
    
    if (expenses.length === 0) {
      return [{
        icon: <Lightbulb className="text-yellow-500 w-5 h-5" />,
        text: "Add some expenses to see insights here."
      }];
    }

    const categories = expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<string, number>);

    const highestCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];

    const result = [
      {
        icon: <AlertTriangle className="text-orange-500 w-5 h-5" />,
        text: `Your highest spending category is ${highestCategory[0]} at $${highestCategory[1].toFixed(2)}.`
      }
    ];

    if (highestCategory[1] > 500) {
      result.push({
        icon: <TrendingUp className="text-red-500 w-5 h-5" />,
        text: `Watch out! Your ${highestCategory[0]} spending is quite high.`
      });
    }

    return result;
  }, [state.transactions]);

  return (
    <div className="bg-indigo-50 border border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800/50 rounded-xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 flex items-center mb-4">
        <Lightbulb className="w-5 h-5 mr-2 text-indigo-500" />
        Quick Insights
      </h3>
      <div className="space-y-3">
        {insights.map((insight, idx) => (
          <div key={idx} className="flex items-start">
            <div className="mt-0.5 mr-3">{insight.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
