import viteLogo from '/vite.svg';
import '@styles/App.css';
import reactLogo from '@images/react.svg';
import Toast from '@main/Toast';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count) {
      toast(`Count value: ${count}`, { icon: (<CancelIcon />) });
    }
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Toast />
    </>
  );
}

export default App;
