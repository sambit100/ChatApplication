import React from 'react';
import Title from '../Shared/Title';
import Header from './Header';
import { Grid } from '@mui/material';
import Footer from './Footer';
import ChatList from '../specific/ChatList';

const Applayout = () => WrappedComponent => {
  return (props)=>{
    return (

        <>
        <Title/>
       <Header/>
       <Grid container height={"calc(100vh-4rem)"}>
        <Grid 
        item 
        sm ={4}
        md={3}
        sx ={{
            display:{xs:"none" , sm:"block"}
        }}
        height={"100%"}
          >
           <ChatList/>
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <WrappedComponent {...props}/>

        </Grid>

        <Grid item md={4} lg={3} height={"100vh"}
         sx ={{
            display:{xs:"none" , sm:"block"},
            padding:"2rem",
            bgcolor:"rgba(0,0,0,0.85)"
        }}
        >Third</Grid>
         
       </Grid>
       <Footer/>
        </>
    )
  }
}

export default Applayout;