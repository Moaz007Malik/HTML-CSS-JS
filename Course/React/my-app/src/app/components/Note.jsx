import React from 'react';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }
  return (
    <div className="border-spacing-2 bg-white rounded-lg shadow-md shadow-slate-300 p-3 w-72 m-4 float-left" >
        <h1 className="text-lg mb-1.5">{props.title}</h1>
        <p className="text-lg mb-2.5 whitespace-pre-wrap break-words">{props.content}</p>
        <button className="relative float-right mr-6 text-yellow-500 border-none w-9 h-9 cursor-pointer outline-none" onClick={handleClick}>DELETE</button>
      </div>
  );
};

export default Note;