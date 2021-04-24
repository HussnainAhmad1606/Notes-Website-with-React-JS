import React from 'react'
import { Note } from "./Note"
export const AllNotes = (props) => {
    let notesStyling = {
        minHeight: "80vh"
    }
    return (
        <div className="Notes container my-4" style={notesStyling}>
            <h1>Your Notes: </h1>
            
                {
                    props.notes.length === 0 ? "No Notes to display. Please add some notes.":
                    props.notes.map((note)=>{
                    return <Note note={note} onDelete={props.onDelete} key={note.sno}/>
                })
                }
                
            
        </div>
    )
}
