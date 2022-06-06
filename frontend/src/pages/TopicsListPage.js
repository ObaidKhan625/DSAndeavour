import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Grid'
import Topic from '../components/Topic';
import topics from '../assets/topics';
import topicsproblem from '../assets/data'
import DummyTopic from '../components/DummyTopic';
import Pinned from '../components/Pinned';
import pinned from '../assets/pinned';
import data from '../assets/data';
import Aos from "aos";
import "aos/dist/aos.css";
// import SearchBar from "../components/SearchBar";
// console.log(data)
const TopicsListPage = () => {
  let [Notes, setNotes] = useState(0)
  let [Pinning, setPinning] = useState([])
  const[Fpinning,setFpinning]=useState([])
  let response="";
  let data9="";
  let arr=[];
  let farr=[];
  var count=0;

  useEffect(()=>{
    Aos.init({duration:2000});
    getNotes(setFpinning(arr))
    console.log(Fpinning)
      },[]);
   
    
    let getNotes = async () => {
      
      // window.location.reload(false);
         response = await fetch('http://127.0.0.1:8000/api/pinned-topics/')  //FETCH THE STRING 0 AND 1
         data9 = await response.json()
        // console.log(data)
        setNotes(data9)  //SETNOTES SAVES 10000000101000000001



       
           arr=[]   //EMPTY ARRAY IS INITALISED TO STORE ALLL 1 THEN WILL PUT IT IN Fpinning
          //  console.log(data)
          const data2=JSON.stringify(data9);   //CONVERT IT INTO STRING
          let data1 = data2.substring(18,49);   //AVOID ADDITION OF ALL CHARACTER LIKE BRACKET AND ALL , 

// console.log(data1+" "+data1.length)
          for(var i=0;i<data1.length;i++){
               
              // console.log(data1.charAt(i)+" "+i+" "+data1.length);
            if(data1.charAt(i)=='1')
            {
                      arr.push(parseInt(i)); //ALL 1 ADDED IN arr
            }
          }
          setPinning(arr);  //ISKO ITERATE KAREGA ME SAB ONES ISME HAI
             console.log(arr)
        

           for(var i=0;i<arr.length;i++)
           {
                        // var c=arr[i];
                        // console.log(arr[i]);
                        let value=data.at(arr[i]-1);   // DATA.JS SE PARTICULAR INDEX ME KYA HAI WO FETCH KARUNGA IF
                        //3 IS THERE IT WILL STORE DETAIL OFF ARRAY3
                        // console.log(value);
                      // farr.push(value);  
                      // console.log(value)
                      setFpinning(prev=>[...prev,value])
                    

           }
        
        // setFpinning(farr)
      
       
           
          
         

    








    }

    
  return (
    <div  style={{ background: "linear-gradient(#e66465, #9198e5)" }}>

       <div data-aos="fade-up">
      <h1>PINNED</h1>
            <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5} paddingBottom={12}>
         {Fpinning.map((pinnedtopic,index)=>(
      <Grid item xs={12} md={6} lg={4}>
           
      <Pinned key={index} pinnedtopic={pinnedtopic} Fpinning={Fpinning} setFpinning={setFpinning}/> 
   </Grid>

   ))

   } 

  
   </Grid>
   <h1>TOPICS</h1>    
       {/* <SearchBar/> */}
      <Grid container spacing={2} paddingTop={5} paddingLeft={5} paddingRight={5}>
        {/* {topics.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
             /* <Topic key={index} topic={topic}/>  
         
          </Grid>
        ))} */}
 
         {topicsproblem.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
           
             <DummyTopic key={index} topic={topic}/> 
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  )
}

export default TopicsListPage