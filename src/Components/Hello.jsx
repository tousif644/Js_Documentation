import React from "react";

function Hello() {
  return (
    <main id="hello">
      <h1>Hello world</h1>
      <p>
        To get started with writing JavaScript, open the Scratchpad and write
        your first "Hello world" JavaScript code:
      </p>
      <code>
        {`function greetMe(yourName) { alert("Hello " + yourName); }}
                `}
        <br />
        greetMe("World");
      </code>
      <p>
        Select the code in the pad and hit Ctrl+R to watch it unfold in your
        browser!
      </p>
    </main>
  );
}

export default Hello;
