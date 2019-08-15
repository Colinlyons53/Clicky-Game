import React from 'react'

function Header() {
    return(
        <div className="header">
        <h1>Select a Meme, but dont pick the same meme more then once. </h1>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
    )
}

export default Header