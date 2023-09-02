import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { Fragment, useEffect, useState } from 'react';
import { getMatches } from './api/Api';

function App() {

 const [data ,setMatches]=useState([]);
 const [odi, setOdi] = useState([]);

  useEffect(()=>{
    getMatches()
    .then((d)=>{
      //console.log(d);
      setMatches(d?.data?.matchList)
    })
    .catch((error)=> alert("could not load data"))
  },[])
  console.log(data);
  //console.log(matches);

  return (
    <div className="App">
      <Navbar/>
      <Typography variant='h3' style={{margin: 20}}>This is our App</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
        data?.map((match)=>(
          <Fragment key={match.id}>
              {match.matchType === "t20" || match.matchType=== "odi" ? 
              <MyCard match={match} /> : ""}
          </Fragment>
        ))
      }
        {
        odi?.map((match)=>(
          <Fragment key={match.id}>
              {match.matchType === "t20" || match.matchType=== "odi" ? 
              <MyCard match={match} /> : ""}
          </Fragment>
        ))
      }
        </Grid>
      </Grid>
      
      
    </div>
  );
}

export default App;
