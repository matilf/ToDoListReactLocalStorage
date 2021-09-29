 
import React, {useState} from 'react'



const Todo = ({todo, index, deletetodo}) =>{
    const [show, setShow] = useState(true);
   
    return(

           
            <div >
                <h3 onClick={() => setShow((s) => !s)} style={{ textDecoration: show ?  "none":"line-through"  }}>{todo}</h3> 
                <button className="btn-delete" onClick={() => deletetodo(index)}>x</button>
                
       
            </div>
       
    )
}

export default Todo