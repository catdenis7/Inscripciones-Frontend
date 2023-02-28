
import Box from '@mui/material/Box';
import CardIcon from './CardIcon';
import levantamiento from '../assets/icons/levantamiento.svg';


import './Home.css'

var name = 'Catherine';
export default function Home() {
    return (
        <>
    <Box Col='3' className='home-box'>
         <CardIcon icono={levantamiento}  />
         <CardIcon />
         <CardIcon />
        
    </Box>
              
              
        </>
    )
}