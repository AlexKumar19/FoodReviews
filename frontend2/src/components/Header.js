import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <header className="header">
      <h1 className="welcome-text">Welcome to the App</h1>
      {email && <div className="email-display">{email}</div>}
    </header>
  );
}

export default Header;
