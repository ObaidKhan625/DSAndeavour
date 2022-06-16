import React,{useState} from 'react';
import { Form} from "react-bootstrap";
function Popup(props) {

      const [content,setContent]=useState({notes:""})    


      
     const submitHandler= async(e)=>{
        e.preventDefault();
        console.log(content)
        if(content.notes==='')
        {
            alert("NOTES CANNOT BE EMPTY")
            
        }
        else{

        setContent(content)
        }
         
      
   
      }
    return (props.trigger)?(
        <div>
{/* 
<form>
  <label>
    NOTES
    <input    placeholder="ENTER YOUR NOTES.. "type="text" name="notes" style={{width: "370px",height:"250px"}}/>
  </label>
  <input type="submit" value="Submit" />
</form>

            <button onClick={()=>props.setTrigger(false)}>CLOSE</button> */}

<Form  onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
 
    <Form.Control as="textarea"
     rows={3} 
     placeholder="ENTER NOTES" 
     onChange={e=>setContent({...content,notes:e.target.value})}
     value={content.notes}
     />
  </Form.Group>
  <button onClick={()=>props.setTrigger(false)}>CLOSE</button>
  <button type="submit" onClick={()=>props.setTrigger(true)}>SAVE</button>
  
</Form>


         
        </div>
    ):""
}

export default Popup;