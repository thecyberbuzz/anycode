import React from 'react'
import "./Style.css";

const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="todologo" />
                <figcaption>ADD YOUR LIST HERE</figcaption>
            </figure>
                <div className="addItems">
                    <input type="text"placeholder="✍🏼 Add Items"
                    className="from-control"/>
                </div>
        </div>
      </div>
    </>
  )
}

export default Todo
