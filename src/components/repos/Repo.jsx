/* eslint-disable react/prop-types */
import React from 'react';

const Repo = ({ name, html_url, language, created_at }) => {
  return (
    <>
      <h3>{name}</h3>
      <a>{html_url}</a>
      <p>{language}</p>
      <p>{created_at}</p>
    </>
  );
};

export default Repo;
