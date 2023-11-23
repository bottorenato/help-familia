import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import withAuthenticator  from 'aws-amplify-react-native';

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
