import logo from './logo.svg';
import './Style/App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
    </div>
  );
}

export default App;
