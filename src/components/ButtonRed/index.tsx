import React from 'react';
import { RiBillLine } from 'react-icons/ri';

const ButtonRed: React.FC = ({ children }) => (
  <button type="button">
    <RiBillLine size={20} color="#f1faee" style={{ marginRight: '0.5em' }} />
    {children}
  </button>
);

export default ButtonRed;
