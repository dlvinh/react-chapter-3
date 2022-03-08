
import './App.css';
import Bonus from './components/Bonus';
import './styles/style.css'
import BettingPlate from './components/BettingPlate';
import DicingPlate from './components/DicingPlate';

function App() {
  return (
    <div className='container-fluid' id="gambling-container">
      <Bonus></Bonus>
      <div className='row'>
        <div className='col-7'>
          <BettingPlate></BettingPlate>
        </div>
        <div className='col-5'>
          <DicingPlate></DicingPlate>
        </div>
      </div>

    </div>
  );
}

export default App;
