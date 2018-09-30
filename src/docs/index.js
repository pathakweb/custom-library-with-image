import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../lib/Button';
import Logo from '../lib/media/amit.jpg';
const App = () => (
  <div>
    <h1>My UI</h1>
    <h2>Button</h2>
    <img src={Logo}/>
    <p>Here's an example of button.hi how r u</p>
    <Button text="Click me!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
