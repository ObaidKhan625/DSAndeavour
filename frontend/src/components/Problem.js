import React, { useState, useEffect, useContext, createContext } from "react";
// import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import swal from 'sweetalert';
import { FaNotesMedical } from "react-icons/fa";
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from "@mui/material/IconButton";
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
// import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import AuthContext from "../context/AuthContext";
import Popup from "./Popup";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
 
// Be sure to include styles at some point, probably during your bootstraping


// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from '@mui/icons-material/Info';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const Problem = (props) => {
  // console.log(props)
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  let { logoutUser, authTokens } = useContext(AuthContext);

  const [currProblemStatus, setCurrProblemStatus] = useState(props.currProblemStatus);
  const [currCardColor, setCurrCardColor] = useState(props.currProblemStatus === '1' ? '#76FF7A' : 'white');
  const [notes,setNotes]=useState(false);

  const [buttonPopup,setButtonPopup]=useState(false)
  const [timePopup,SetTimePopup]=useState(false)

  const changeCurrProblemStatus = async (status) => {
    console.log(status);
    let response = await fetch(`http://127.0.0.1:8000/api/problem-status/${props.problem.index}/${status}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
  }

  const handleChange = async (event) => {
    if(event.target.checked) {
      setCurrProblemStatus('1');
      changeCurrProblemStatus('1');
      setCurrCardColor('#76FF7A');
      swal({
        title: "SUCCESS",
        text: "CHECKED",
        icon: "success",
        dangerMode: true,
        button:false,
        timer:800
      })
    }
    else {
      setCurrProblemStatus('0');
      changeCurrProblemStatus('0');
      setCurrCardColor('white');
      swal({
        title: "STATUS",
        text: "UNCHECKED",
        icon: "error",
        dangerMode: true,
        button:false,
        timer:800
      })


    }
  };


  // const NotesAdd=()=>{

  // }

  useEffect(() => {
    setCurrProblemStatus(props.currProblemStatus);
    if(props.currProblemStatus ==='1') {
      setCurrCardColor('#76FF7A');
    }
    else {
      setCurrCardColor('white');
    }
  }, [props.currProblemStatus])

  return (
    <div  data-aos="fade-up">

      <Card variant="outlined" sx = {{ backgroundColor: currCardColor }}>
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          action={
            <Checkbox
              checked={currProblemStatus === '1'}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              color='success'
              
            />
          }

          title={props.problem.name}
          sx = {{textAlign: 'center'}}


     


         
         
        />
       
        {/* <Popup trigger={timePopup} setTrigger={SetTimePopup}></Popup> */}



        
      
           {/* <FaNotesMedical/> */}
        
        {/* <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing style={{justifyContent:'center'}}>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Button variant="primary"><InfoIcon sx={{ fontSize: 30 }}/></Button>
            <Button variant="success"><b>Link 1</b></Button>
            {/* <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '} */}
            <Button variant="success"><b>Link 2</b></Button>
            <Button variant="danger"                           
            // href={`https://www.youtube.com/watch?v=${video}`}
            href="https://www.youtube.com/watch?v=M65xBewcqcI&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8"
            >
            <YouTubeIcon sx={{ fontSize: 30 }}/> 
            </Button> 
          </Stack>

          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>

        
      </Card>
      <button onClick={()=>setButtonPopup(true)}>ADD NOTES</button>

<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
<h3>My popup</h3></Popup>


    </div>
  );
};



export default Problem;
//  export default {Totalsum,Sumsolved};
