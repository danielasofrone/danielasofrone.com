import React from 'react';

const Icon = ({children, ...props}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);
export const Menu = props => (
  <Icon {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);
export const ArrowLeft = props => (
  <Icon {...props}>
    <path d="m12 19-7-7 7-7M5 12h14" />
  </Icon>
);
