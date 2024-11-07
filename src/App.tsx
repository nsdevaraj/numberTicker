import React, { useState } from 'react';
import { NumberTicker } from './components/NumberTicker';
import { ArrowUpCircle, ArrowDownCircle, RefreshCw } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () =>
    setCount((prev) => prev + Math.floor(Math.random() * 1000));
  const decrement = () =>
    setCount((prev) => Math.max(0, prev - Math.floor(Math.random() * 1000)));
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Number Ticker
          </h2>

          <div className="flex justify-center mb-8">
            <div className="text-6xl font-bold tabular-nums">
              <NumberTicker
                value={count}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={decrement}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <ArrowDownCircle className="w-6 h-6 text-red-400" />
            </button>

            <button
              onClick={reset}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <RefreshCw className="w-6 h-6 text-yellow-400" />
            </button>

            <button
              onClick={increment}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <ArrowUpCircle className="w-6 h-6 text-green-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
