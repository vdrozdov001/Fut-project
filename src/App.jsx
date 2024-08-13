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
  const [items, setItems] = useState([]);
  const debouncedInputValue = useDebounce(inputValue, 1000); 

  const fecthData = (search) => {
    const searchString = search.length >= 3 ? `&search=${search}` : '';
    fetch(`https://drop-api.ea.com/rating/fc-24?limit=30${searchString}`)
      .then(response => response.json())
      .then(data => {
        setItems(data.items);
      })
      .catch(error => {
        console.error('Error:', error)
        setItems([])
      });
  }
  
  useEffect(() => {
    fecthData(debouncedInputValue)
  }, [debouncedInputValue]);

  const handleClearInput = () => {
    setInputValue('');
  };



  return (
    <div className="wrapper">
      <Container>
        <div className="box">
          <TextField
            className="box__input"
            placeholder="Enter text"
            minLength={3}
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
          <div id="box-inner">
            {items.map((card) => <Card key={card.id} card={card}/>)}
          </div>
        </div>
        </div>
      </Container>
    </div> 
  );
}  
   
export default App;

