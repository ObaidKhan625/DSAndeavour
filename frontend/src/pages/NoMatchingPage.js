import React  from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Font from 'react-font';
import Footer from '../components/footer/Footer';

const NoMatchingPage = () => {
  return (
    <div>
        <Container style={{'backgroundColor': 'rgba(255, 255, 255, 0.2)', 
        'height': '100vh', 'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)', 'paddingTop': '300px'}}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
                <Grid item xs={3}>
                <Font family="Lobster">
                    <h1 style={{'textAlign':' center', 'color': 'black'}}>
                    No Matching Page Found
                    </h1>
                </Font>
                </Grid>
            </Grid> 
            <Footer/>
        </Container>
    </div>
  )
}

export default NoMatchingPage;