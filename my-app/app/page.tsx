
"use client";

import { useState } from "react";

type CounterProps = {
  incrementAmount: number;
  buttonColor: string;
};

function Counter({ incrementAmount, buttonColor }: CounterProps) {
  const [count, setCount] = useState(0);

  function increment() {
    const newCount = count + incrementAmount;

    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border p-6">
      <p className="text-2xl">Count: {count}</p>

      <button
        onClick={increment}
        style={{ backgroundColor: buttonColor }}
        className="rounded px-4 py-2 text-white"
      >
        Increment by {incrementAmount}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Counter Assignment</h1>

      <Counter incrementAmount={1} buttonColor="blue" />

      <Counter incrementAmount={2} buttonColor="green" />
    </main>
  );
}

