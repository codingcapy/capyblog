import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="p-8 text-cyan-300 md:flex">
      <div className="p-2">
        <Link to="/">Capyblog</Link>
      </div>
      <div className="p-2">
        <Link to="/">Blogs</Link>
      </div>
      <div className="p-2">
        <Link to="/about">About</Link>
      </div>
      <div className="p-2">
        <a href="https://github.com/codingcapy" target="_blank">
          Github
        </a>
      </div>
      <div className="p-2">
        <a href="https://www.linkedin.com/in/paul-sunghun-kim" target="_blank">
          LinkedIn
        </a>
      </div>
    </header>
  );
}
