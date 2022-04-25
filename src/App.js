import logo from './logo.svg';
import './App.css';
import Header from './Header';

import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
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
