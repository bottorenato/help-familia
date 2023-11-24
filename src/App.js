import './App.css';
import Amplify from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

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

export default withAuthenticator(App);