import logo from './logo.svg';
import './App.css';

import { useContext,useState,useEffect } from 'react';
import { KeyboardContext } from './contexts/keyboardContext';
import {
  Button,
  Box,
  Dialog,
} from "@mui/material";
function App() {
  const [state,setState] = useState(0)
  const [open,setOpen] = useState(false)
  const keyboard = useContext(KeyboardContext)
  const [enter,setEnter] = useState(false)
  useEffect(()=>{
    setEnter(keyboard.enter)
  },[keyboard.enter])

  const func = ()=>{
    setState(state+1)
    setOpen(false)
    setEnter(false)
  }
  return (

    <div className="App">
      {state}
      <Button onClick={()=>{
        setOpen(true)
      }}>
打開
      </Button>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <Button
          onClick={func}
        >
          確認
        </Button>
        {!open?<></>:enter?func():<></>}
      </Dialog>
    </div>

  );
}

export default App;
