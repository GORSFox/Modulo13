import React, {useState} from 'react';
import './App.css';
import { Title } from '../Styles/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import foto from '../../assets/foto.jpg';
import Avatar from '@mui/material/Avatar';


function App() {
  
    const [js, setJs] = React.useState(5);
    const [ts, setTs] = React.useState(4);
    const [node, setNode] = React.useState(4);
    const [webpack, setWebpack] = React.useState(2);
    const [react, setReact] = React.useState(3);


  return (
    <div className=''>
      <Avatar alt = "Remy Sharp" src ={foto}  />
      
      <Title>Glaucia Rapozo
        <span>Front-end</span>
      </Title>

      <h1>Habilidades</h1>
      
      
      <Box
        sx={{
          '& > legend': { mt: 5 },
        }}
      >
        <Typography component="legend">JavaScript</Typography>
        <Rating
          name="simple-controlled"
          value={js}
          onChange={(event, newValue) => {
            setJs(newValue);
          }}
        />
      </Box>
      
      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend">TypeScript</Typography>
        <Rating
          name="simple-controlled"
          value={ts}
          onChange={(event, newValue) => {
            setTs(newValue);
          }}
        />
      </Box>

      <Box
        sx={{
          '& > legend': { mt: 3 },
        }}
      >
        <Typography component="legend">Node</Typography>
        <Rating
          name="simple-controlled"
          value={node}
          onChange={(event, newValue) => {
            setNode(newValue);
          }}
        />
      </Box>

      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend">Webpack</Typography>
        <Rating
          name="simple-controlled"
          value={webpack}
          onChange={(event, newValue) => {
            setWebpack(newValue);
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 3 },
        }}
      >
        <Typography component="legend">React</Typography>
        <Rating
          name="simple-controlled"
          value={react}
          onChange={(event, newValue) => {
            setReact(newValue);
          }}
        />
      </Box>

      
    </div>
  );
}

export default App;
