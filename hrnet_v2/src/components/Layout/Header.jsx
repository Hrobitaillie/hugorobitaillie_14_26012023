import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" shadow-header fixed top-0 w-full bg-white z-10">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 ">
          <img src="/assets/img/logo.png" alt="" className=" w-12 h-12" />
          <h1 className=" font-Inter font-bold text-2xl">HRnet</h1>
        </Link>
        <nav>
          <ul>
            <li className=" uppercase font-semibold text-base font-Inter flex gap-4">
              <Link to="/">Add Employee</Link>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
