import { useState, useEffect } from "react";
import "./App.css";
import { AllNotes } from "./Components/AllNotes";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { AddNote } from "./Components/AddNote";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
function App() {
  let initNotes;
  if (localStorage.getItem("notes") === null) {
    initNotes = [];
  } else {
    initNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = (note) => {
    console.log("I am deleting, ", note);
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (title, desc) => {
    console.log(`I am adding ${title} and ${desc} note.`);
    let sno;
    if (notes.length === 0) {
      sno = 1;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    let newNote = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setNotes([...notes, newNote]);

    console.log(newNote);
  };

  const [notes, setNotes] = useState(initNotes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Router>
      <Header title="WhatNotes" searchBar={true} />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/notes">
        <AddNote addNote={addNote} />
        <AllNotes notes={notes} onDelete={onDelete} />
        </Route>
        </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;
