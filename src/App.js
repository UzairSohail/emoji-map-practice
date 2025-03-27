import logo from './logo.svg';
import './App.css';
import Emojis from "./emojipedia";
import Entry from './entry';

function CreateEntry(emoji_term) {
  return (
    <Entry id={emoji_term.id} name={emoji_term.name} emoji={emoji_term.emoji} meaning={emoji_term.meaning} />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojis.map(CreateEntry)}
      </dl>
    </div>
  );
}

export default App;
