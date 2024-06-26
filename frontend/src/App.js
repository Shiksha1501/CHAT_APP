import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './pages/Homepage';
import ChatPage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
