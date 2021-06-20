import React, { useState, useEffect } from "react";
import axios from "axios";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const Posts = () => {
  const [editItemById, setEditItemById] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataUrl = "https://60bb880442e1d00017620c95.mockapi.io/Posts/";
    axios.get(dataUrl).then((response) => {
        let getData = response.data;
        setError(null);
        setData(getData);
      })
      .catch((error) => {
        setError("error in getting data request");
        setData(null);
      });
  }, []);

  const handleEditItem = (id) => {
    setEditItemById(id);
    console.log(`editing data item with id: ${id}`);
  };

  const handleDeleteItem = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);

    axios.delete(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${id}`)     //удаление delete
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Delete error");
      });

    console.log(`data item with id: ${id} was deleted`);
  };

  const handleSubmitItem = (item) => {
    let itemIndex = data.findIndex(el => el.id === item.id),
    nextItems = [...data];

    if (itemIndex > -1) {
      nextItems[itemIndex] = {
        ...nextItems[itemIndex],
        ...item,
      };

      axios.put(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${item.id}`, {      //эдит put
        title: item.title,
        body: item.body,
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("Put error");
        });

      console.log(`data item with id: ${item.id} was edited`);
    }
    else {
      nextItems.push({
        id: `${nextItems.length + 1}`,
        ...item,
      });

      axios.post('https://60bb880442e1d00017620c95.mockapi.io/Posts/', {      //создание post
        id: `${nextItems.length}`,
        title: item.title,
        body: item.body,
      })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Post error");
    });

    console.log(`new data item was added with id: ${nextItems.length}`);
    }

    setData(nextItems);
    setEditItemById(null);
  };

  console.log(data);

  return (
    <div className="thirdTask">
      {error !== null ? (
        <div>Olllu6ka! {error}</div>
      ) : (
        <>
        <div>
          <PostForm
            editItem={data.find(el => el.id === editItemById)}
            handleCancell={() => handleEditItem(null)}
            handleSubmit={handleSubmitItem}
          />
        </div>
        <div>
          <PostList
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
