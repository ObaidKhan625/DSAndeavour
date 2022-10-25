import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Font from 'react-font';
import './AboutUs.css'

const AboutUsPage = () => {
  return (
    <div style={
      {'textAlign':'justify'}
    }>
      <Container style={{'backgroundColor': 'rgba(255, 255, 255, 0.2)', 
      'height': '100vh', 'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)', 'paddingTop': '5vh'}}>
        <Font family="Lobster">
          <Typography  color="black" fontFamily="Lobster" fontSize="25px" style={{'textAlign': 'center'}}>
            What is Striver SDE Sheet?
          </Typography>
        </Font>
        <Font family="Acme">
          <Typography  color="black" fontSize="20px" fontFamily="Acme" style={{'paddingTop': '5vh'}}>
            SDE Sheet contains very handily crafted and picked top coding interview questions from different topics of Data 
            Structures & Algorithms. These questions are one of the most asked coding interview questions in coding interviews of 
            companies like Amazon, Microsoft, Media.net, Flipkart, etc, and cover almost all of the concepts related to Data Structure 
            & Algorithms.
          </Typography>
        </Font>

        <Font family="Lobster">
          <Typography  color="black" fontFamily="Lobster" fontSize="25px" style={{'textAlign': 'center', 'paddingTop': '5vh'}}>
            What is Striver SDE Sheet?
          </Typography>
        </Font>
        <Font family="Acme">
          <Typography  color="black" fontSize="20px" fontFamily="Acme" style={{'paddingTop': '5vh'}}>
            This is sheet is prepared by Raj Vikramaditya A.K.A Striver, Candidate Master, 6*, who has bagged offers from Google 
            Warsaw, Facebook London, Media.net(Directi). He has also interned at Amazon India. He is also one of the top educators 
            at Unacademy and was at GeeksforGeeks as well. Not only this, hundreds of students cleared interviews of top companies 
            with the help of this sheet. What are you waiting for?
          </Typography>
        </Font>

        <Font className="dsa_div_res" family="Lobster">
          <Typography  color="black" fontFamily="Lobster" fontSize="25px" style={{'textAlign': 'center', 'paddingTop': '5vh'}}>
            What is DSAndeavour?
          </Typography>
        </Font>
        <Font family="Acme">
          <Typography  color="black" fontSize="20px" fontFamily="Acme" style={{'paddingTop': '5vh'}}>
          DSAndeavour is a web application that easily lets you track your progress on the SDE sheet. One can solve problems, pin the
          topics they'd like to focus on and create notes for revision. Hope you like it!
          </Typography>
        </Font>

        <Font family="Lobster">
          <Typography  color="black"  fontSize="20px" fontFamily="Lobster" style={{'textAlign': 'center', 'paddingTop': '5vh'}}>
            Incase of any suggestions feel free to give us <a target='_blank' href="/feedback">feedback</a>.<br /> 
            Or get in touch with : <br />
            <a target='_blank'  rel="noopener noreferrer"href="https://www.linkedin.com/in/obaid-khan-590489213/">Obaid Khan</a><br />
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/farhan-shaikh-568a271b6/">Farhan Shaikh</a><br />
          </Typography>
        </Font>

      </Container>
    </div>
  )
}

export default AboutUsPage;
