import logo from './logo.svg';
import './App.css';
import Header from './Header';

import Prototypes from "./Prototypes";
import Orders from "./Orders";
import AppStateProvider from "./providers/AppStateProvider";


function App() {
  return (
    <AppStateProvider>
    
    <Header />
    <Orders />
    </AppStateProvider>
  );
}

export default App;
