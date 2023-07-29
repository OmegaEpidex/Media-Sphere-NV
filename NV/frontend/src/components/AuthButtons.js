import React from 'react';

const AuthButtons = () => {
  const handleSignIn = () => {
    // Redirect the user to the OAuth provider's authentication page
    window.location.href = 'http://your-backend-server/auth/google';
  };

  const handleSignOut = () => {
    // Redirect the user to the backend endpoint for logging out
    window.location.href = 'http://your-backend-server/auth/logout';
  };

  return (
    <div className="auth-buttons">
      {/* Check if the user is authenticated and show appropriate buttons */}
      {localStorage.getItem('accessToken') ? (
        // If the user is authenticated, show the "Sign Out" button
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        // If the user is not authenticated, show the "Sign Up/In" button
        <button onClick={handleSignIn}>Sign Up / Sign In</button>
      )}
    </div>
  );
};

export default AuthButtons;
