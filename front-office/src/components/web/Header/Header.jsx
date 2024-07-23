import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <LanguageSelector />
    </header>
  );
}
