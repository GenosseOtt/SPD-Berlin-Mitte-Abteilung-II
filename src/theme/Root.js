import React from 'react';
import CookieBanner from '../components/CookieBanner';

// Docusaurus Root wrapper to add global components
export default function Root({children}) {
  return (
    <>
      {children}
      <CookieBanner />
    </>
  );
}
