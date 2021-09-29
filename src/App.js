import './App.css';
import { Button } from '@mui/material';
import NewsPaper from './Components/NewsPaper/NewsPaper';

function App() {
  return (
    <div className="App">
     <Button variant="contained">Click Me</Button>
     <NewsPaper></NewsPaper>
    </div>
  );
}

export default App;
