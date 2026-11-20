
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Counter</h1>

      <p className="text-2xl">Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="rounded bg-gray-500 px-4 py-2 text-white"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
