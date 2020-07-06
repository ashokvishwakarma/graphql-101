import React, { FC } from 'react';
import { A, usePath } from 'hookrouter';

import Routes from '../routes';

interface NavProps {}
const Nav: FC<NavProps> = (props: NavProps) => {
  const path: string = usePath();

  return <div className="nav">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul>
            <li className={`${path === '/' ? 'active' : ''}`}><A href="/">Posts</A></li>
            <li className={`${path === '/users' ? 'active' : ''}`}><A href="/users">Users</A></li>
            <li className={`${path === '/categories' ? 'active' : ''}`}><A href="/categories">Categories</A></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

interface MainProps {}
const Main: FC<MainProps> = (props: MainProps) => {
  return <div className="main">
    <Nav />
    <Routes />
  </div>
}

export default Main;