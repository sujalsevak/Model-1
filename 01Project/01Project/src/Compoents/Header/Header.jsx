import { Link } from "react-router-dom";
function Header() {
  return (
   <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Smart School</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/teachers" className="hover:underline">Teachers</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  </header>

  );
}

export default Header