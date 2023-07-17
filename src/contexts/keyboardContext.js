import { createContext, useState,useRef } from "react";

const KeyboardContext = createContext(null);

function KeyboardProvider({ children }) {
    const ref = useRef(true)
    const [enter,setEnter] = useState(false)
    const handleKeyDown = (event)=>{
      if(event.key==='Enter'){
          setEnter(true)
      }
    }
    const handleKeyUp = (event)=>{
      if(event.key==='Enter'){
          setEnter(false)
      }
    }

    if(ref.current){
        ref.current = false
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }
  return (
    <KeyboardContext.Provider
      value={{
        enter,
        setEnter
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
}

export { KeyboardProvider, KeyboardContext };
