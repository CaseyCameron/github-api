import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <h1>Github User Search</h1>
      </Link>
      <Search />
    </header>
  );
}
