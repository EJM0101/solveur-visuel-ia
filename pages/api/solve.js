export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { initialState, algo } = req.body;

  const visited = new Set();
  const queue = [[initialState]];
  const stateKey = (s) => JSON.stringify(s);

  while (queue.length > 0) {
    const path = (algo === 'dfs') ? queue.pop() : queue.shift();
    const state = path[path.length - 1];

    if (isGoal(state)) return res.json({ solution: path });

    const successors = getSuccessors(state);
    for (const next of successors) {
      const key = stateKey(next);
      if (!visited.has(key)) {
        visited.add(key);
        if (algo === 'dfs') queue.push([...path, next]);
        else if (algo === 'a_star') {
          const h = heuristic(next);
          queue.push([...path, next]);
          queue.sort((a, b) => heuristic(a[a.length - 1]) - heuristic(b[b.length - 1]));
        } else {
          queue.push([...path, next]);
        }
      }
    }
  }

  return res.json({ solution: [] });
}

function isGoal(state) {
  const flat = state.flat();
  return JSON.stringify(flat) === JSON.stringify([1,2,3,4,5,6,7,8,0]);
}

function getSuccessors(state) {
  const moves = [];
  const clone = (grid) => grid.map(row => [...row]);
  const pos = findZero(state);
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];

  for (let [dx,dy] of directions) {
    const [x,y] = [pos[0]+dx, pos[1]+dy];
    if (x >= 0 && x < 3 && y >= 0 && y < 3) {
      const newGrid = clone(state);
      [newGrid[pos[0]][pos[1]], newGrid[x][y]] = [newGrid[x][y], newGrid[pos[0]][pos[1]]];
      moves.push(newGrid);
    }
  }
  return moves;
}

function heuristic(state) {
  const goal = [[1,2,3],[4,5,6],[7,8,0]];
  let h = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const val = state[i][j];
      if (val !== 0) {
        const gx = Math.floor((val - 1) / 3);
        const gy = (val - 1) % 3;
        h += Math.abs(i - gx) + Math.abs(j - gy);
      }
    }
  }
  return h;
}

function findZero(grid) {
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (grid[i][j] === 0) return [i,j];
}
