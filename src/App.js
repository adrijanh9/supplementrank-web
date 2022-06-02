import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
import SortSelect from './components/SortSelect'
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Grid container spacing={1} sx={{marginTop: 2}}>

        <Grid item xs={2}>
          <SortSelect/>
        </Grid>

        <Grid item xs={10}>
          <Products/>
        </Grid>


      </Grid>
      
    </div>
  );
}

export default App;
