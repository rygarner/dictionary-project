import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <div>
          <footer className="App-footer">
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/rgarn1/">Ry Garner</a>,
            open-sourced on{" "}
            <a
              href="https://github.com/rygarner/SheCodes-Project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            , and hosted on{" "}
            <a
              href="https://fascinating-starburst-6bc341.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
