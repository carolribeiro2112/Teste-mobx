import './App.css';
import { observer } from 'mobx-react-lite';
import './App.css'

const App = observer((props) => {
  return (
   <div className='App'>
     <h1>Counter</h1>
     <div className='counter'>
      <button type='button' onClick={() => props.store.increment()}>+</button>
      <span>{props.store.counter}</span>
      <button type='button' onClick={() => props.store.decrement()}>-</button>
     </div>
   </div>
  );
})

export default App;
