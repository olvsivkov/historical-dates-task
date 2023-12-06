import React from "react";


const App = () => (
  <>
    <h1 className="title">
      My React and TypeScript App!!{" "}
      {new Date().toLocaleDateString()}
    </h1>
    <div className="box">
      <p className="hi">Hi!</p>
    </div>
  </>
);

export {App}