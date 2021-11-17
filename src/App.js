import './App.css';
import { observer } from 'mobx-react-lite';

const App = observer((props) => {
  console.log(props)
  return (
   <div>
     <h1>Counter</h1>
     <p>Value: {props.store.counter}</p>
     <button type='button' onClick={() => props.store.increment()}>Increment</button>
     <button type='button' onClick={() => props.store.decrement()}>Decrement</button>
   </div>
  );
})

export default App;
