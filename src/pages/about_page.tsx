import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutPage() {
  const location = useLocation();

  // L'URL courante est stockée dans location.pathname
  const currentURL = location.pathname;

  // Utilisez currentURL comme vous le souhaitez
  console.log('URL courante :', currentURL);
  return (
    <>
        <p>
            A propos
        </p>
    </>
  );
}
