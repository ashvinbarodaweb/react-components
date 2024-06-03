import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import { Link } from "react-router-dom";

const navItems = ["home", "settings", "build", "cloud", "mail"];
const paths = ["/", "/settings", "/build", "/cloud", "/mail"]; // Define paths for each nav item

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-3-page">
      <aside className={`sidebar-3 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-3-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
            <img src='' />
          </header>
          <nav>
            {navItems.map((item,index) => (
                
              <button key={item} type="button" >
                <span className="material-symbols-outlined"> <Link to={paths[index]} className="text-white">{item}</Link></span>
                <p className="mb-0"> <Link to={paths[index]} className="text-white">{item}</Link></p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
}

export default Sidebar