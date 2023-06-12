import React from 'react';

const withContainer = (WrappedComponent) => {
  return (props) => (
    <div className="container">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withContainer;
