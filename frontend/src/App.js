import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './pages/Homepage';
import ChatPage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/chats" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
