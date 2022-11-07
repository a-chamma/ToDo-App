import React from 'react';

function TodoForm(props) {

    return ( 
        <form onSubmit={props.SubmitInput}>
            <h1>What is On Your Plate ToDay ??</h1>
        <input 
        value={props.InputValue} 
        onChange={props.GetInput}
        className="todo-input "
         />
        <button className='todo-button'>Add Todo</button>
        </form>
     );
}

export default TodoForm;
