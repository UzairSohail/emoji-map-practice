import logo from './logo.svg';
import './App.css';
import Emojis from "./emojipedia";
import Entry from './entry';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojis.map(emoji => {
          <Entry
            key={emoji_term.id}
            name={emoji_term.name}
            emoji={emoji_term.emoji}
            meaning={emoji_term.meaning} />
        })}
      </dl>
    </div>
  );
}

export default App;
