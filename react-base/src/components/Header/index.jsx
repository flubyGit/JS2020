import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const buttonClicked = useSelector((state) => state.buttonClicked);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/outra">
        <FaSignInAlt size={24} />
      </Link>
      {buttonClicked ? (
        <p style={{ color: 'green' }}>CLicado</p>
      ) : (
          <p style={{ color: 'green' }}>Não clicado</p>
        )}
    </Nav>
  );
}
