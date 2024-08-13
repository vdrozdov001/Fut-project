import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Container from './components/Container/container.jsx';
import '../general.css';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import useDebounce from './hooks/useDebounce.js'; 
import Card from './components/card/card.jsx';

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500); 
  const [x] = useState('Lol');
  console.log(x);

  const handleClearInput = () => {
    setInputValue('');
  };

  useEffect(() => {
    if (debouncedInputValue) {
      const interval = setInterval(() => {
        console.log(debouncedInputValue);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [debouncedInputValue]);



  return (
    <div className="wrapper">
      <Container>
        <div className="box">
          <TextField
            className="box__input"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ width: '100%' }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearInput} edge="end">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),}}
          />
          <div className="card-box">
          <Card/>
        </div>
        </div>
      </Container>
    </div> 
  );
}  
   
export default App;

