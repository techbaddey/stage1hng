import "./App.css";
import profileImage from "./oyinkansola.jfif";
import slack from "./slack.png";
import github from "./github.png";
import zuri from "./zuri.png";
import ifg from "./IFG-Logo.png";

function App() {
  return (
    <div className="Container">
      <div className="Main">
        <div className="Profile">
          <img id="profile__img" src={profileImage} />
          <p id="twitter">Teqbaddie</p>
          {/* <p id='slack'>Teqbaddie</p> */}
        </div>
        <div className="Mainlinks">
          <div className="Links">
            <a
              id=""
              href="https://twitter.com/teqbaddie"
              target="_blank"
              rel="noreferrer"
            >
              Twitter Link
            </a>
          </div>
          <div className="Links">
            <a
              id="btn__zuri"
              href="https://training.zuri.team/"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Team
            </a>
          </div>
          <div className="Links">
            <a
              id="books"
              href="http://books.zuri.team"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Books
            </a>
          </div>
          <div className="Links">
            <a
              id="book__python"
              href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
              target="_blank"
              rel="noreferrer"
            >
              Python Books
            </a>
          </div>
          <div className="Links">
            <a
              id="pitch"
              href="https://background.zuri.team"
              target="_blank"
              rel="noreferrer"
            >
              Background Check for Coders
            </a>
          </div>
          <div className="Links">
            <a
              id="book_design"
              href="https://books.zuri.team/design-rules"
              target="_blank"
              rel="noreferrer"
            >
              Design Books
            </a>
          </div>
        </div>
        <div className="icons">
          <img className="icon" src={slack} />
          <img className="icon" src={github} />
        </div>
      </div>
      <div className="footer">
        <img className="image" src={zuri} />
        <p className="text">HNG Internship 9 Frontend Task</p>
        <img className="image" src={ifg} />
      </div>
    </div>
  );
}

export default App;
