import React, {useState, createContext} from 'react';

import Counter from './components/Counter';

export const Mycontext = createContext();
const App = () => {

  const [count, setCount] = useState(0)
  return<> 

  <button onClick={()=> {setCount(count + 1) }} >+</button>
  <button onClick={()=> {setCount(count - 1) }}  >-</button>

  <Mycontext.Provider value={count}>
  <Counter />
  </Mycontext.Provider>
 
  </>;
};

export default App;
