import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const [itemId, setItemId] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { register, formState: { errors }, handleSubmit } = useForm();

  useEffect(() => {
    let item = props.editItem ? props.editItem : {
      id: null,
      title: '',
      body: '',
    };

    if (itemId !== item.id) {
      setItemId(item.id);
      setTitle(item.title);
      setBody(item.body);
    }
  },[props.editItem, itemId]);

  const onSubmit = (e) => {
    console.log(e.id);
    let oldItem = props.editItem || {};

    props.handleSubmit({
      ...oldItem,
      title: title,
      body: body,
    });

    if (!props.editItem) reset();
  };

  const handleChange = (e) => {
    let {name, value} = e.target;
    if (name === "title") {
      setTitle(value)
    }
    else {
      setBody(value);
    }
  };

  const reset = () => {
      setItemId(null);
      setTitle('');
      setBody('');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{props.editItem ? `Edit item "${props.editItem.title}"` : "Create item"}</h2>
      <div>
        <h3>Title:</h3>
        <input type="text" {...register("title", { required: true, minLength: 1 })} onChange={handleChange} value={title}  />
        {errors.title?.type === 'required' && " Title is required"}
      </div>
      <div>
        <h3>Body:</h3>
        <textarea {...register("body", { required: true, minLength: 1 })} onChange={handleChange} value={body} />
        {errors.body?.type === 'required' && " Body is required"}
        {props.editItem && (
          <button onClick={props.handleCancel}>Cancel</button>
        )}
      </div>
    </form>
  );
}

export default PostForm;
