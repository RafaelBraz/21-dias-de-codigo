import { Gallery } from './components/Gallery';
import './App.css';

import AlquimiaPrint from './images/alquimia.png';
import DeadlinePrint from './images/deadline.png';
import OdisseiaPrint from './images/odisseia.png';

function App() {
  return (
    <div className="App">
      <Gallery images={[OdisseiaPrint, DeadlinePrint, AlquimiaPrint]} />
    </div>
  );
}

export default App;
