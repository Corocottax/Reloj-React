import './App.scss';
import { Cronometro } from './components/Cronometro/Cronometro';
import { CuentaAtras } from './components/CuentaAtras/CuentaAtras';
import { RelojDigital } from './components/RelojDigital/RelojDigital';

function App() {
  return (
    <div>
      
      <RelojDigital />
      <CuentaAtras />
      <Cronometro />

    </div>
  );
}

export default App;