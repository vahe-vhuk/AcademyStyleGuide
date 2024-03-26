import "./Header.css"

import SitePng from "./logos/site.png"

function Header({tittle = "Academy"}) {
  return (
    <header className="header">
        <a href="/"><img className="logo" src={SitePng} alt="logo"/></a>
      <p className="head_text">{tittle} Style Guide</p>
    </header>
  );
}

export default Header;