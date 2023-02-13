
import './App.css';
import { RouterProvider } from 'react-router';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
