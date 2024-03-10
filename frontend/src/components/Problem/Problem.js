import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import swal from "sweetalert";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import LinkIcon from '@mui/icons-material/Link';
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/AuthContext";
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import Cookies from "universal-cookie";
import "./Problem.css";

const noteModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const linksModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center"
};

const Problem = (props) => {
  const apiBaseURL = process.env.REACT_APP_API_URL;

  let { logoutUser, accessToken } = useContext(AuthContext);
  let authenticated = false;
  const cookies = new Cookies();

  if (accessToken) {
    authenticated = true;
  }

  const screenWide = useMediaQuery({ query: '(min-width: 461px)' });

  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [linksModalOpen, setLinksModalOpen] = useState(false);
  const [noteStatus, setNoteStatus] = useState(false);
  
  const handleNoteModalOpen = () => {
    setNoteModalOpen(true);
  };
  const handleNoteModalClose = () => {
    setNoteModalOpen(false);
  };

  const handleLinksModalOpen = () => {
    setLinksModalOpen(true);
  };
  const handleLinksModalClose = () => {
    setLinksModalOpen(false);
  };

  const [noteContent, setNoteContent] = React.useState(props.currProblemNote);

  const [currProblemStatus, setCurrProblemStatus] = useState(
    props.currProblemStatus
  );
  const [currCardColor, setCurrCardColor] = useState(
    props.currProblemStatus === "1" ? "#76FF7A" : "white"
  );

  const changeCurrProblemStatus = async (status) => {
    if (authenticated) {
      let response = await fetch(
        `${apiBaseURL}/api/problem-status/${props.problem.index}/${status}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(accessToken),
          },
        }
      );
      if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    } else {
      let abc = cookies.get("dsandeavour_problem_status");
      let tempProblemStatus = "";
      for (let i = 0; i < 195; i++) {
        if (props.problem.index - "0" !== i) {
          tempProblemStatus += abc[i];
        } else {
          tempProblemStatus += status;
        }
      }
      cookies.remove("dsandeavour_problem_status");
      cookies.set("dsandeavour_problem_status", tempProblemStatus, {
        path: "/",
        maxAge: 30 * 60,
      });
    }
    props.deactivateLoading();
  };

  const handleProblemStatusChange = async (event) => {
    props.activateLoading();
    if (event.target.checked) {
      setCurrProblemStatus("1");
      changeCurrProblemStatus("1");
      setCurrCardColor("#76FF7A");
      swal({
        title: "Done!",
        text: "Marked As Done!",
        icon: "success",
        dangerMode: true,
        button: false,
        timer: 500,
      });
    } else {
      setCurrProblemStatus("0");
      changeCurrProblemStatus("0");
      setCurrCardColor("white");
      swal({
        title: "Done!",
        text: "Marked As Incomplete!",
        icon: "error",
        dangerMode: true,
        button: false,
        timer: 500,
      });
    }
  };

  const updateProblemNote = async () => {
    console.log("Update Note");
    if (authenticated) {
      if (noteContent === undefined) {
        return;
      }
      if(noteContent === "") {
        setNoteStatus(false);
      }
      else {
        setNoteStatus(true);
      }
      let indexS = props.problem.index.toString();
      let response = await fetch(`${apiBaseURL}/api/problem-notes/${indexS}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(accessToken),
        },
        body: JSON.stringify({ problem_note: noteContent }),
      });
      if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    }
  };

  useEffect(() => {
    setCurrProblemStatus(props.currProblemStatus);
    if (props.currProblemStatus === "1") {
      setCurrCardColor("#76FF7A");
    } else {
      setCurrCardColor("white");
    }
  }, [props.currProblemStatus]);

  useEffect(() => {
    if(props.currProblemNote !== undefined && props.currProblemNote.length > 0) {
      setNoteStatus(true);
    }
    else {
      setNoteStatus(false);
    }
  }, [props.currProblemNote]);

  useEffect(() => {
    setCurrProblemStatus("0");
    setCurrCardColor("white");
  }, [props.clear]);

  return (
    <div data-aos="fade-up">
      <Card
        variant="outlined"
        sx={{ backgroundColor: currCardColor }}
        className="problem__card"
      >
        { screenWide
          ?
          <CardHeader
            action={
              <span>
                <Checkbox
                  checked={currProblemStatus === "1"}
                  onChange={handleProblemStatusChange}
                  inputProps={{ "aria-label": "controlled" }}
                  color="success"
                />
                {
                  noteStatus? 
                  <IconButton
                    variant="outline-success"
                    onClick={handleNoteModalOpen}
                  >
                    <StickyNote2Icon />
                  </IconButton>
                  :
                  <IconButton
                    variant="outline-success"
                    onClick={handleNoteModalOpen}
                  >
                    <StickyNote2OutlinedIcon />
                  </IconButton>
                }
              </span>
            }
            title={props.problem.name}
            sx={{ textAlign: "center" }}
          />
          :
          <CardHeader
            title={props.problem.name}
            sx={{ textAlign: "center" }}
          />
        }

        <CardContent></CardContent>

        <CardActions disableSpacing style={{ justifyContent: "center" }}>
          {screenWide
            ?
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <Button variant="primary" target="_blank" href={props.problem.info}>
                <InfoIcon sx={{ fontSize: 30 }} />
              </Button>
              <Button
                variant="success"
                target="_blank"
                href={props.problem.link1}
              >
                <b>Link 1</b>
              </Button>
              <Button
                variant="success"
                target="_blank"
                href={props.problem.link2}
              >
                <b>Link 2</b>
              </Button>
              <Button variant="danger" target="_blank" href={props.problem.yt}>
                <YouTubeIcon sx={{ fontSize: 30 }} />
              </Button>
            </Stack>
            :
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <IconButton
                variant="outline-success"
                onClick={handleLinksModalOpen}
              >
                <LinkIcon />
              </IconButton>
              <Checkbox
                checked={currProblemStatus === "1"}
                onChange={handleProblemStatusChange}
                inputProps={{ "aria-label": "controlled" }}
                color="success"
              />
              {
              noteStatus? 
                <IconButton
                  variant="outline-success"
                  onClick={handleNoteModalOpen}
                >
                  <StickyNote2Icon />
                </IconButton>
              :
                <IconButton
                  variant="outline-success"
                  onClick={handleNoteModalOpen}
                >
                  <StickyNote2OutlinedIcon />
                </IconButton>
            }
            </Stack>
          }
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
              onChange={(event) => { 
                setNoteContent(event.target.value); 
                if(event.target.value === "") {
                  setNoteStatus(false);
                }
                else {
                  setNoteStatus(true);
                }
              }}
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

      {/* Links Popup Modal Start */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={linksModalOpen}
        onClose={handleLinksModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={linksModalOpen}>
          <Box container sx={linksModalStyle} textAlign='center' justify="center">
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
              <Button variant="primary" target="_blank" href={props.problem.info}>
                <InfoIcon sx={{ fontSize: 30 }} />
              </Button>
              <Button variant="danger" target="_blank" href={props.problem.yt}>
                <YouTubeIcon sx={{ fontSize: 30 }} />
              </Button>
            </Stack>
            <br />
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
              <Button
                  variant="success"
                  target="_blank"
                  href={props.problem.link1}
              >
                <b>Link 1</b>
              </Button>
              <Button
                variant="success"
                target="_blank"
                href={props.problem.link2}
              >
                <b>Link 2</b>
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Problem;