import logo from './logo.svg';

import Card from './Card'
import Summary from "./Summary";
import Header from "./Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="NewBridge Go"/>
      <Summary/>
      <Card name={"NEW2ETH"} target={"new2eth"}/>
      <Card name={"ETH2NEW"} target={"eth2new"}/>
    </div>
  );
}

export default App;
