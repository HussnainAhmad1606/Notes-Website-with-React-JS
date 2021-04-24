import React from "react";
import { useState } from "react";

export const AddNote = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addNote(title, desc);
            setTitle("");
            setDesc("");
        }

    }
  return (
      <div className="container my-4">
      <h1>Add a Note</h1>
      <form onSubmit={submit}>
      <label htmlFor="" className="form-label">Note Title:</label>      

      <div className="mb-3">
        <input
        onChange={(e)=>{setTitle(e.target.value)}}
          type="text"
          value={title}
          className="form-control"
          id="title"
        />
      </div>
      <label htmlFor="" className="form-label">Note Description:</label>      

      <div className="mb-3">
        <textarea
        onChange={(e)=>{setDesc(e.target.value)}}
          className="form-control"
          value={desc}
          id="desc"
          rows="3"
        ></textarea>
      </div>
      <input className="btn btn-success" type="submit" value="Add Note"/>
    </form>
      </div>
    
  );
};
