import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {withAuthenticator,AmplifySignout}  from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <h1>Welcome to Amplify</h1>
        <AmplifySignout />
      </div>
    </AmplifyAuthenticator>
  
  );
}

export default App;
