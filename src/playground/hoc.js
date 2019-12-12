/// HOC - Higher Order Component. Is a component that renders another component.

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const isAuthenticated = WrappedComponent => {
  return props => (
    <div>
      <div>{props.isAuthenticated && <WrappedComponent {...props} />}</div>
      <div>
        {!props.isAuthenticated && <p>This user is not authenticated!</p>}{" "}
      </div>
    </div>
  );
};

const AuthInfo = isAuthenticated(Info);

ReactDOM.render(
  <AuthInfo info="Some details here.." isAuthenticated={false} />,
  document.getElementById("app")
);
