import React from 'react';
import FormContainer from "./containers/FormContainer";

function App() {
  return (
    <div className="col-md-6" style={appStyle}>
        <h1 className="text-center"> Am I Engineer or Developer? </h1>
        <h2 className="my-3 text-center text-secondary">Choose your skills</h2>
        <FormContainer />
    </div>
  );
}

const appStyle = {
  margin: "0 auto"
};

export default App;
