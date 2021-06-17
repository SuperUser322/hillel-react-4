import React, { useState, useEffect } from "react";
import axios from "axios";

import TestComponent from "./tests/testComponent";

const Posts = () => {
  const [editItemById, setEditItemById] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
      const dataUrl = "https://60bb880442e1d00017620c95.mockapi.io/Posts/";
      axios.get(dataUrl).then((response) => {
          let newData = response.data;
          //setError(error);
          setData(newData);
        })

    }, []);

  const handleEditItem = (id) => {
    console.log(`edit on item with id ${id} was pushed`)
  }

  const handleDeleteItem = (id) => {
    console.log(`delete on item with id ${id} was pushed`)
  }

  return (
    <div className="thirdTask">
    {console.log(data)}
      {error !== null ? (
        <div>Olllu6ka! {error}</div>
      ) : (
        <>
        <div>
          PostForm
        </div>
        <div>
          <TestComponent
            data={data}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
        </>
      )}
    </div>
  );


}

export default Posts;
