import React, { useState , useEffect} from "react"
import Todo from "./Todo"



const Form = () => {
    const [todos, setTodos] = useState(() => {
        // get the todos from local storage
        const savedTodos = localStorage.getItem("todos");
        // if there are todos stored
        if (savedTodos) {
          // return the parsed the JSON object back to a javascript object
          return JSON.parse(savedTodos);
          // otherwise
        } else {
          // return an empty array
          return [];
        }
      });
    const [todo, setTodo] = useState("")
      // useEffect to run once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therfore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [todos]);

    const handleChange = e => setTodo({ [e.target.name]: e.target.value })

    const handleClick = e => setTodos([...todos, todo])

    const handleSubmit = e => { e.preventDefault() }

   const deletetodo = indice => {
        const resetTodos = [...todos]
        resetTodos.splice(indice, 1)
        setTodos(resetTodos)
    }

 
 

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChange} />
                <button onClick={handleClick}>add</button>
            </form>

            {todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deletetodo={deletetodo} />
            ))
            }



        </>
    )
}

export default Form