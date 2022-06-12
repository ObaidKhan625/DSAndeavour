import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Topic from "../components/Topic";
import topicsproblem from "../assets/topics";
import Pinned from "../components/Pinned";
import pinned from "../assets/pinned";
import data from "../assets/data";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AuthContext from "../context/AuthContext";

// import SearchBar from "../components/SearchBar";
// console.log(data)
const TopicsListPage = () => {
  let [Notes, setNotes] = useState(0);
  let [Pinning, setPinning] = useState([]);
  const [Fpinning, setFpinning] = useState([]);
  let response = "";
  let data9 = "";
  let arr = [];

  let { logoutUser, authTokens } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getNotes(setFpinning(arr));
    // console.log(Fpinning)
  }, []);


  const [problemStatus, setProblemStatus] = useState("");

  const getProblemStatus = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/problem-status/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    let responseJson = await response.json();
    setProblemStatus(responseJson['problem_status']);
  }
  useEffect(() => {
    getProblemStatus();
  }, [problemStatus]);

  let getNotes = async () => {
    // window.location.reload(false);
    let response = await fetch('http://127.0.0.1:8000/api/pinned-topics/', { //FETCH THE STRING 0 AND 1
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    data9 = await response.json();
    // console.log(data)
    setNotes(data9); //SETNOTES SAVES 10000000101000000001

    arr = []; //EMPTY ARRAY IS INITALISED TO STORE ALLL 1 THEN WILL PUT IT IN Fpinning
    //  console.log(data)
    const data2 = JSON.stringify(data9); //CONVERT IT INTO STRING
    let data1 = data2.substring(18, 50); //AVOID ADDITION OF ALL CHARACTER LIKE BRACKET AND ALL ,

    for (var i = 0; i < data1.length; i++) {
      // console.log(data1.charAt(i)+" "+i+" "+data1.length);
      if (data1.charAt(i) == "1") {
        arr.push(parseInt(i)); //ALL 1 ADDED IN arr
      }
    }
    setPinning(arr); //ISKO ITERATE KAREGA ME SAB ONES ISME HAI

    for (var i = 0; i < arr.length; i++) {
      // var c=arr[i];
      // console.log(arr[i]);
      let value = data.at(arr[i] - 1); // DATA.JS SE PARTICULAR INDEX ME KYA HAI WO FETCH KARUNGA IF
      //3 IS THERE IT WILL STORE DETAIL OFF ARRAY3
      // console.log(value);
      // farr.push(value);
      // console.log(value)
      setFpinning((prev) => [...prev, value]);
    }

    // setFpinning(farr)
  };

  // const onClickRemoveFavorite = (value) => () => {
  //   console.log(value + " DELETED");
  //   axios
  //     .get("http://127.0.0.1:8000/api/pinned-topics/" + value + "/" + 0 + "/")

  //     .then((response) => {
  //       console.log("SUCCESS");
  //       alert("REMOVED FROM PINNED SECTION");
  //       getNotes();
  //       //  updateList(list.filter(item => item.name !== name))
  //       // setFpinning(Pinned.filter(value=>))
  //     })
  //     .catch((error) => {
  //       console.log("Decline");
  //       alert("DECLINED ERROR IN PINNED SECTION");
  //     });
  //   axios.get("http://127.0.0.1:8000/api/pinned-topics/");
  //   console.log("HELLO");

  //   //  const newNotes = Fpinning.filter((note) => note.value !== value);
  //   setFpinning([]);
  // };

  // const onClickAddFavorite = (value) => () => {
  //   console.log(value + " ADDED");
  //   axios
  //     .get("http://127.0.0.1:8000/api/pinned-topics/" + value + "/" + 1 + "/")

  //     .then((response) => {
  //       console.log("SUCCESS");
  //       alert("ADDED SUCCESSFULLY");
  //       getNotes();
  //       //  updateList(list.filter(item => item.name !== name))
  //       // setFpinning(Pinned.filter(value=>))
  //     })
  //     .catch((error) => {
  //       console.log("Decline");
  //       alert("DECLINED ERROR IN ADD SECTION");
  //     });
  //   axios.get("http://127.0.0.1:8000/api/pinned-topics/");
  //   console.log("HELLO");

  //   //  const newNotes = Fpinning.filter((note) => note.value !== value);
  //   setFpinning([]);
  // };

  return (
    <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <div data-aos="fade-up">
        <h1>PINNED</h1>
        <Grid
          container
          spacing={4}
          paddingTop={5}
          paddingLeft={5}
          paddingRight={5}
          paddingBottom={12}
        >
          {Fpinning.map((pinnedtopic, index) => (
            <Grid item xs={12} md={6} lg={4}>
              <MDBCard
                background={pinnedtopic.type}
                className="text-white mb-3"
                style={{ maxWidth: "60rem" }}
              >
                <Pinned
                  key={index}
                  pinnedtopic={pinnedtopic}
                  Fpinning={Fpinning}
                  setFpinning={setFpinning}
                />
                <button
                  class="btn btn-+{pinnedtopic.type}"
                  // onClick={onClickRemoveFavorite(pinnedtopic.index)}
                >
                  <DeleteOutlineOutlinedIcon />{" "}
                </button>
              </MDBCard>
            </Grid>
          ))}
        </Grid>

        <div data-aos="fade-up">
          <h1>TOPICS</h1>
          {/* <SearchBar/> */}
          <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
            {topicsproblem.map((topic, index) => (
              <Grid item xs={12} md={6} lg={4}>
                  <Topic key={index} topic={topic} problem_status={problemStatus} /> 
                  <Button variant="outline-success">
                    <button
                      class="btn btn-+{topic.type}"
                      // onClick={onClickAddFavorite(topic.index)}
                    >
                      <AddBoxIcon />
                    </button>
                    "btn btn-success"
                  </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TopicsListPage;
