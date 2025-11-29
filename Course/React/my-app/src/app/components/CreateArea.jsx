"use client"

import React, { useState } from 'react'

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return{
               ...prevNote,
                [name]: value
            };
        });
    };

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };

  return (
    <div>
      <form className="relative w-80 mx-auto mt-7 mb-5 bg-white p-4 rounded-lg shadow">
        <input className= "w-full border-none p-1 outline-none text-lg font-inherit resize-none" name="title" type="text" onChange={handleChange} value={note.title} placeholder="Text" />
        <textarea className= "w-full border-none p-1 outline-none text-lg font-inherit resize-none" name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3"></textarea>
        <button className="absolute right-4 -bottom-4 bg-yellow-500 text-white border-none rounded-full w-9 h-9 shadow cursor-pointer outline-none" onClick={submitNote}>Add</button>
      </form>
    </div>
  )
};

export default CreateArea;
