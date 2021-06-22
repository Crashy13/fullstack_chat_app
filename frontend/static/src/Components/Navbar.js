function Navbar(props) {
  return(
    <nav>
      <div>
        <button onClick={() => props.handleNavigation('login')}>Login</button>
        <button onClick={() => props.handleNavigation('registration')}>Register</button>
        <button onClick={() => props.handleLogout('logout')}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
