import './App.css';
import MyComponent from './Components/MyComponent';
import Car from './Components/Car'
import FootballResult from './Components/FootballResults';
import Store from "./Components/Store"
import Week from './Components/Week';

/* React Programming Pattern
* Most common programming pattern in React > use Stateful (parent) component
* to maintain their own state and pass it down to one or more stateless child components as props.
*/


function App() {
  return (
    <div>
      <MyComponent/>

      <hr/>
      <Car/>

      <hr/>
      <FootballResult/>

      <hr/>
      <Store/>

      <hr/>
      <Week day="Monday"/>
    </div>
  );
}

export default App;
