import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <div>
      <p>Hello {name ? name : 'World'}</p>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Greeting;
