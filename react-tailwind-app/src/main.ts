import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 👈 This line connects the new App.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
