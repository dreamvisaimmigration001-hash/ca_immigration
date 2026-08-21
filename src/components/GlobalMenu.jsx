import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`gcweb-menu wb-init gcweb-menu-inited ${isOpen ? 'active' : ''}`} typeof="SiteNavigationElement" id="wb-auto-2" aria-labelledby="mainMenuBtn">
      <h2 className="wb-inv">Menu</h2>
      <p id="gcweb-menu-desc" hidden>Main Menu. Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.</p>
      <button 
        type="button" 
        aria-haspopup="true" 
        aria-expanded={isOpen} 
        id="mainMenuBtn" 
        aria-describedby="gcweb-menu-desc"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="wb-inv">Main </span>Menu 
        {isOpen ? (
          <ChevronUp size={14} className="expicon" aria-hidden="true" />
        ) : (
          <ChevronDown size={14} className="expicon" aria-hidden="true" />
        )}
      </button>
      <ul 
        role="menu" 
        aria-orientation="vertical" 
        className="wb-init wb-data-ajax-replace-inited" 
        id="wb-auto-3"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <li role="presentation">
          <Link role="menuitem" tabIndex="0" aria-haspopup="true" aria-controls="gc-mnu-jobs" aria-expanded="false" to="/jobs">Jobs and the workplace</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-cit" aria-expanded="false" to="/services/immigration-citizenship">Immigration and citizenship</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-travel" aria-expanded="false" to="/travel">Travel and tourism</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-biz" aria-expanded="false" to="/business">Business and industry</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-benny" aria-expanded="false" to="/benefits">Benefits</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-health" aria-expanded="true" to="/health">Health</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-taxes" aria-expanded="false" to="/">Taxes</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-enviro" aria-expanded="false" to="/">Environment and natural resources</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-defence" aria-expanded="false" to="/">National security and defence</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-culture" aria-expanded="false" to="/">Culture, history and sport</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-policing" aria-expanded="false" to="/">Policing, justice and emergencies</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-trans" aria-expanded="false" to="/">Transport and infrastructure</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-canworld" aria-expanded="false" to="/">Canada and the world</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-money" aria-expanded="false" to="/">Money and finances</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-science" aria-expanded="false" to="/">Science and innovation</Link>
        </li>
        <li role="presentation">
          <Link role="menuitem" tabIndex="-1" aria-haspopup="true" aria-controls="gc-mnu-life" aria-expanded="false" to="/">Manage life events</Link>
        </li>
      </ul>
    </nav>
  );
}
