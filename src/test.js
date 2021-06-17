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

  /*useEffect(() => {
    function handleEditItem (id) {
        setEditItemById(id);
      console.log(`editing data item with id: ${id}`);
    }
  });*/

  /*useEffect(() => {
    function handleDeleteItem (id) {
      let newData = data.filter((item) => item.id !== id);
        setData(newData);*/
      /*axios.delete(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${id}`)     //удаление delete
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log("Delete error");
        });*/
      /*console.log(`data item with id: ${id} was deleted`);
    }
  });*/

  /*useEffect(() => {
    function handleSubmitItem (item) {
      let itemIndex = data.findIndex(el => el.id === item.id),
      nextItems = [...data];

      if (itemIndex > -1) {
        nextItems[itemIndex] = {
          ...nextItems[itemIndex],
          ...item,
        };*/
        /*axios.put(`https://60bb880442e1d00017620c95.mockapi.io/Posts/${nextItems.length}`, {      //эдит put
          title: item.title,
          body: item.body,
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Put error");
          });*/
        /*console.log(`${nextItems.length}`, "a", item);
      }

      else {
        nextItems.push({
          id: `${nextItems.length + 1}`,
          ...item,
        });*/
        /*axios.post('https://60bb880442e1d00017620c95.mockapi.io/Posts/', {      //создание post
          id: `${nextItems.length}`,
          title: item.title,
          body: item.body,
        })
      .then((res:AxiosResponse<T>) => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("Post error");
      });*/
      /*console.log(`new data item was added with id: ${nextItems.length}`);
      }
        setData(nextItems);
        setEditItemById(null);
      }
  });*/
      /*<PostForm
        editItem={data.find(el => el.id === editItemById)}
        handleCancell={() => handleEditItem(null)}
        handleSubmit={handleSubmitItem()}
      />*/
      /*<PostList
        data={data}
        handleEditItem={this.handleEditItem()}
        handleDeleteItem={this.handleDeleteItem()}
      />*/
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
