import React from "react";

const TestComponent = (props) => {

  return (
    <>
      {[...props.data].reverse().map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <div>
            <button onClick={() => props.handleEditItem(item.id)}>Edit</button>
            <button onClick={() => props.handleDeleteItem(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TestComponent;
