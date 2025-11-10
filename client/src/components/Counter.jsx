import React, { useState } from 'react';
export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
      <div>Count: {n}</div>
      <button onClick={() => setN(n + 1)}>Increment</button>
    </div>
  );
}
