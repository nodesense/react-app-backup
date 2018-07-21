import React from 'react';
import { string } from 'prop-types';
const Link = ({ title, url }) => <a href={url}>{title}</a>;
Link.propTypes = {
  title: string.isRequired,
  url: string.isRequired
};
export default Link;