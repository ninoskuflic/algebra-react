import './App.css';
import {
  FunctionalComponent,
  ClassComponent
} from './Components';

function App() {
  return (
    <div>
      <FunctionalComponent name="John"/>
      <ClassComponent name="Sara"/>
    </div>
  );
}

export default App;