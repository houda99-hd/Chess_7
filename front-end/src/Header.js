
function Header() {
const Navbar = () => (
    <nav className="navbar">
      <div className="navbar--logo-holder">
        <img src={Logo} alt="logo" className="navbar--logo" />
        <h1> Stick'Me</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">Home</li>
        <li className="navbar--link-item">About</li>
        <li className="navbar--link-item">Blog</li>
      </ul>
    </nav>
  )
}
  export default Header