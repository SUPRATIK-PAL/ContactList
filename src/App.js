import React from "react";
import "./App.css"
import ContactList from "./components/ContactListApp";

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Contact List</h1>
      {/* Heading for the app */}
      <ContactList /> {/* Render the ContactList component */}
    </div>
  );
};

export default App;
