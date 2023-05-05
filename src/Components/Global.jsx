import React from "react";

function Global() {
  return (
    <main id="global">
      <h1>Global variables</h1>
      <p>
        Global variables are in fact properties of the global object. In web
        pages the global object is window, so you can set and access global
        variables using the window.variable syntax.
      </p>
      <p>
        Consequently, you can access global variables declared in one window or
        frame from another window or frame by specifying the window or frame
        name. For example, if a variable called phoneNumber is declared in a
        document, you can refer to this variable from an iframe as
        parent.phoneNumber.
      </p>
    </main>
  );
}

export default Global;
