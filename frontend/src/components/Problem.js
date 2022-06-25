import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import swal from 'sweetalert';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import AuthContext from "../context/AuthContext";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from '@mui/icons-material/Info';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import CancelIcon from "@mui/icons-material/Cancel";

const noteModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Problem = (props) => {

  let { logoutUser, accessToken } = useContext(AuthContext);

  const [noteModalOpen, setNoteModalOpen] = React.useState(false);
  const handleNoteModalOpen = () => {
    setNoteModalOpen(true);
  }
  const handleNoteModalClose = () => {
    setNoteModalOpen(false);
  };

  const [noteContent, setNoteContent] = React.useState(props.currProblemNote);

  const [currProblemStatus, setCurrProblemStatus] = useState(props.currProblemStatus);
  const [currCardColor, setCurrCardColor] = useState(props.currProblemStatus === '1' ? '#76FF7A' : 'white');
  
  const changeCurrProblemStatus = async (status) => {
    let response = await fetch(`http://127.0.0.1:8000/api/problem-status/${props.problem.index}/${status}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    props.deactivateLoading();
  }

  const handleProblemStatusChange = async (event) => {
    props.activateLoading();
    if(event.target.checked) {
      setCurrProblemStatus('1');
      changeCurrProblemStatus('1');
      setCurrCardColor('#76FF7A');
      swal({
        title: "SUCCESS",
        text: "Marked As Done!",
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
        text: "Marked As Incomplete!",
        icon: "error",
        dangerMode: true,
        button:false,
        timer:800
      })
    }
  };

  const updateProblemNote = async() => {
    if(noteContent === undefined) {
      return;
    }
    let indexS = props.problem.index.toString();
    let response = await fetch(`http://127.0.0.1:8000/api/problem-notes/${indexS}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      },
      body: JSON.stringify({problem_note: noteContent})
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
  }

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
          action={
            <span>
            <Checkbox
              checked={currProblemStatus === '1'}
              onChange={handleProblemStatusChange}
              inputProps={{ "aria-label": "controlled" }}
              color='success'
            />
            <IconButton variant="outline-success" onClick={handleNoteModalOpen}>
              <StickyNote2Icon />
            </IconButton>
            </span>
          }
          title={props.problem.name}
          sx = {{textAlign: 'center'}}
        />

        <CardContent>
        </CardContent>

        <CardActions disableSpacing style={{justifyContent:'center'}}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Button variant="primary" target='_blank'
            href={props.problem.info}
            >
              <InfoIcon sx={{ fontSize: 30 }}/>
            </Button>
            <Button variant="success" target='_blank'
            href={props.problem.link1}
            >
              <b>Link 1</b>
            </Button>
            <Button variant="success" target='_blank'
            href={props.problem.link2}
            >
              <b>Link 2</b>
            </Button>
            <Button variant="danger" target='_blank'                     
            href={props.problem.yt}
            >
            <YouTubeIcon sx={{ fontSize: 30 }}/> 
            </Button> 
          </Stack>
        </CardActions>        
      </Card>

      {/* Note Popup Modal Start */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={noteModalOpen}
        onClose={handleNoteModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={noteModalOpen}>
        <Box sx={noteModalStyle}>
            <TextField
              id="outlined-multiline-static"
              label="Note"
              multiline
              rows={8}
              fullWidth
              color="success"
              focused
              defaultValue={props.currProblemNote}
              value={noteContent}
              onChange={(event) => setNoteContent(event.target.value)}
            />
            <Stack direction="row" spacing={2} style={{ marginTop: "15px" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FF0000" }}
                onClick={() => {
                  handleNoteModalClose();
                }}
              >
                <CancelIcon />
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#00ff00" }}
                onClick={() => {
                  updateProblemNote();
                  handleNoteModalClose();
                }}
              >
                <CheckIcon />
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};



export default Problem;