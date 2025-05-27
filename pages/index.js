import { useState, useEffect } from 'react';

export default function Home() {
  const [state, setState] = useState([[1,2,3],[4,0,5],[6,7,8]]);
  const [solution, setSolution] = useState([]);
  const [step, setStep] = useState(0);
  const [algo, setAlgo] = useState("a_star");

  useEffect(() => {
    if (solution.length > 0 && step < solution.length) {
      const timer = setTimeout(() => {
        setState(solution[step]);
        setStep(step + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [solution, step]);

  const callSolver = async () => {
    const res = await fetch('/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ initialState: state, algo })
    });
    const data = await res.json();
    setSolution(data.solution);
    setStep(0);
  };

  const handleTileClick = (i, j) => {
    const pos = findZero(state);
    const dx = Math.abs(i - pos[0]);
    const dy = Math.abs(j - pos[1]);
    if (dx + dy === 1) {
      const newState = state.map(row => [...row]);
      [newState[pos[0]][pos[1]], newState[i][j]] = [newState[i][j], newState[pos[0]][pos[1]]];
      setState(newState);
    }
  };

  const findZero = (grid) => {
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (grid[i][j] === 0) return [i,j];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-center font-sans">
      <h1 className="text-3xl font-bold mb-4">Solveur Visuel IA</h1>
      <div className="grid grid-cols-3 gap-2 justify-center max-w-xs mx-auto">
        {state.map((row, i) =>
          row.map((n, j) => (
            <div key={\`\${i}-\${j}\`} onClick={() => handleTileClick(i,j)}
              className="w-20 h-20 bg-white border flex items-center justify-center text-xl font-semibold shadow cursor-pointer">
              {n !== 0 ? n : ""}
            </div>
          ))
        )}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <select value={algo} onChange={e => setAlgo(e.target.value)} className="border p-2 rounded">
          <option value="a_star">A*</option>
          <option value="bfs">BFS</option>
          <option value="dfs">DFS</option>
        </select>
        <button onClick={callSolver} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Résoudre
        </button>
      </div>
      {solution.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Solution trouvée en {solution.length - 1} étapes.
        </div>
      )}
    </div>
  );
}
