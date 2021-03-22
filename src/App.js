import './App.css';
import Home from './page/Home/Home'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
function App() {
  return (
    <div className='app-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
