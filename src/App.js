import React, {Component} from 'react';
import Navbar from './Navbar';
import Customlist from './Customlist';
import CardSection from './CardSection';
import CardSectionagain from './cardSectionagain.js';
import Tabs from './tabs.js';
import Click from './click.js';
import './App.css';

// import Table from './table.js';

class App extends Component {
  render() {
  return (
 <div>
<Navbar/>
<Customlist/>
<Tabs/>     
<Click/>
<CardSection/>
<CardSectionagain/>

{/* <Table/>  */}
 </div>
  );
  }
}

export default App;