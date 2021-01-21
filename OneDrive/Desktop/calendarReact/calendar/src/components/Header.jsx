import React, { Component } from 'react';
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import '../style/Header.css'


class Header extends Component {
    render() {
        return (
          <React.Fragment>
            <div className='vertical-menu'>
              <ul>
                {MenuItems.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={item.url} className={item.class}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </React.Fragment>
        );
    }
}

export default Header;