import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isgameInProgress} = props
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isgameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {currentScore}</p>
          <p className="total-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
