import {UpdatedMainDateContext} from './updatedMainDate.context';
import { useState } from "react";

function UpdatedMainDateProvider({ children }) {
  const updatedMainDateState = useState(new Date().toLocaleString()); 

  return (
    <UpdatedMainDateContext.Provider value={updatedMainDateState}>
        {children}
    </UpdatedMainDateContext.Provider>
  );
}


export default UpdatedMainDateProvider;