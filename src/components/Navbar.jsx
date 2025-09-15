import { Link } from "react-router-dom";
import { Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button"; 

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-sm">
            <div className="font-bold text-xl text-indigo-600 ml-8 align-middle">
              <Ambulance className="w-10 h-10 text-indigo-600" />
              MEDTECH MAVERICKS
            </div>
            <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/doctosDashboard">Doctors</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div className="flex gap-3">
              <Button variant="outline" className="cursor-pointer">
                Sign in
              </Button>
              <Button className="cursor-pointer">Sign up</Button>
            </div>
          </header>
  );
}
