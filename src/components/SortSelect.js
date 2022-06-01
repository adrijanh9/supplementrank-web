import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect() {

  const [sortBy, setSortBy] = React.useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{marginLeft: 1 }}>

      <FormControl fullWidth>

        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="sort"
          onChange={handleChange}
        >

          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'discount'}>Discount</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}
