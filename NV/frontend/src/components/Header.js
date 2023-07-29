import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <h1>Welcome to the Media Sphere</h1>
      {
        <div class="auth-button">
          <button class="auth-button">
            Sign in / Sign up
        </button>
        </div>
      }
    </header>
  );
};

export default Header;
