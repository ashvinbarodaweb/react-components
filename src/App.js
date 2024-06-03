import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebars/simple_sidebar';
function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={ <Sidebar/>} />
    </Routes>
  
   </div>
  );
}

export default App;
