import React from 'react'

export const Note = (props) => {

    return (
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.note)}}>Delete</button>
            <hr/>
        </div>
    )
}
