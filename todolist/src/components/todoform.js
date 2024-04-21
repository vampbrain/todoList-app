import React, {useState} from 'react'

export const todoform = () => {
    const [value,setValue] = useState("");

    const handlesubmit = e =>{
        e.preventDefault();
        console.log(value);
    }
    return (
        <form className='todoform' onSubmit={handlesubmit}> 
        <input type='text' className='todoinput' placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)}/>

        <button type='submit' className='todobtn'> Add Task
        </button>
        </form>
    )
}