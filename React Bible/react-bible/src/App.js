import './App.css';

import {
  ClassComponent,
  FunctionalComponent,
  Effects,
  Events,
  Message,
  Hooks,
  Lifecycle,
  Car,
  City,
  Counter,
  Simpsons,
  Store,
  Week
} from './Components';

function App() {
  return (
    <div>
      <ClassComponent name="Nino"/>
      <FunctionalComponent name="Nino"/>
      <Effects/>
      <Events/>
      <Message/>
      <Hooks/>
      <Lifecycle/>
      <Car/>
      <City/>
      <Counter/>
      <Simpsons/>
      <Store/>
      <Week day="Monday"/>
    </div>
  );
}

export default App;
