import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

function RenderHomePage(props) {
  const {
    userInfo: { name },
    authService: { logout },
  } = props;
  return (
    <div>
      <h1>Hi {name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/document-list">Documents</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button handleClick={logout} buttonText="Logout" />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;