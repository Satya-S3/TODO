import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Todos from './Components/Todos';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar/>
      <Todos/>
    </div>
  );
}

export default App;
