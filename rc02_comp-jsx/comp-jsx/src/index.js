import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const app = <p>hello</p>;
// const App = () => {
//   return(
//     <p>hello world</p>
//   )
// };

// const Main = () => {
//   return <Child />;
// };

// const Child = () => {
//   return <p>I'm child comp</p>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
