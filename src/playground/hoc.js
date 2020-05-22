/// Higher Order Compenenet - A componenet (HOC) renders another component
// Reuse code
// Render Hijacking
// Prop Manupulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You must login</p>
      )}
    </div>
  );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const appRoot = document.getElementById('app');
//ReactDOM.render(<AdminInfo info="LOL" isAdmin={true} />, appRoot);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Sensitive" />, appRoot);
