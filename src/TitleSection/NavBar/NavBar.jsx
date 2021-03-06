import * as React from 'react';
import './NavBar.css';
import { NavItem } from './NavItem';

const NAV_ITEMS = [
  {
      itemName: "Contact",
      link: "#footer"
  },
  {
      itemName: "Price",
      link: "#pricing"
  },
  {
      itemName: "Download",
      link: "#cta"
  },
];

export const NavBar = () => (
    <nav class="navbar navbar-expand-lg navbar-nav-scroll navbar-dark fixed-top pink-section">
        <a class="navbar-brand" href="#">tindog</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                {NAV_ITEMS.map(item => <NavItem {...item} />)}
            </ul>
        </div>
    </nav>
);