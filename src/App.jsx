import { PrimeReactProvider } from 'primereact/api'
import Paths from './routes/Paths'

import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const App = () => {
  return (
    <PrimeReactProvider>
      <Paths />
    </PrimeReactProvider>
  );
}
 
export default App;