import React from 'react';

const TopNav = ({user}) => {
  console.log(user);
  return(
    <div className="top_nav">
      <div className="nav_menu">
        <nav>
          <div className="nav toggle">
            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li className="">
              <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="images/img.jpg" alt=""/> {user.name}
                <span className=" fa fa-angle-down"></span>
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a href="javascript:;"> Profile</a></li>
                <li><a href="javascript:;">Settings</a></li>
                <li><a href="javascript:;">Help</a></li>
                <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default TopNav;