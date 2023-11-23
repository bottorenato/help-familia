import './App.css';

import { withAuthenticator, AmplifySignout }  from '@aws-amplify/ui-react';

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

export default withAuthenticator(App);
