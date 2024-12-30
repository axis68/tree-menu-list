import { useState } from 'react';
import './App.css';
import TreeMenuList from './tree-menu-list/TreeMenuList';

const options = [
  { index: "1", label: "Option 1"},
  { index: "2", label: "Option 2", subOptions: [ 
    { index: "2.1", label: "Suboption 2.1"},
    { index: "2.2", label: "Suboption 2.2", subOptions: [
      { index: "2.2.1", label: "Suboption 2.2.1" },
    ]},
  ]},
  { index: "3", label: "Option 3", subOptions: [ 
    { index: "3.1", label: "Suboption 3.1"},
    { index: "3.2", label: "Suboption 3.2"},
  ]},
];
const initialOption = { index: "2.1", label: "Suboption 2.1"};

function App() {
  const [currentOption, setCurrentOption] = useState(initialOption);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Example of a TreeMenuList component:
        </p>
        <TreeMenuList options={options} selectedOption={currentOption} onChange={(option) => setCurrentOption(option)}/>
      </header>
    </div>
  );
}

export default App;
