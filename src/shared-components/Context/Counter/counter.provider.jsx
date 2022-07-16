import {CounterContext} from './counter.context';
import { useState } from "react";

function CounterProvider({ children }) {
  const countertState = useState(() => {
    const stored = JSON.parse(localStorage.getItem('tasks'));
    const arrID = stored?.reduce((acc,v) => v.id > acc ? v.id : acc, 1);
    return arrID ? arrID+1 : 1
  }); 

  return (
    <CounterContext.Provider value={countertState}>
        {children}
    </CounterContext.Provider>
  );
}


export default CounterProvider;