import "./index.css";

const Navbar = () => {
  return (
    <header>
      <nav className="main_navbar">
        <div className="menu">
          <ul>
            <a href="#aboutme">ABOUT ME</a>
            <a href="#lifepath">LIFE PATH</a>
            <a href="https://github.com/robdgs" target="_blank">
              GITHUB
            </a>
            <a href="#contactme">CONTACT ME</a>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
