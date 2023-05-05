import React from "react";

function Variable() {
  return (
    <main id="variable">
      <h1>Variables</h1>
      <p>
        You use variables as symbolic names for values in your application. The
        names of variables, called identifiers, conform to certain rules.
      </p>
      <p>
        A JavaScript identifier must start with a letter, underscore (_), or
        dollar sign ($); subsequent characters can also be digits (0-9). Because
        JavaScript is case sensitive, letters include the characters "A" through
        "Z" (uppercase) and the characters "a" through "z" (lowercase).
      </p>
      <p>
        You can use ISO 8859-1 or Unicode letters such as å and ü in
        identifiers. You can also use the Unicode escape sequences as characters
        in identifiers. Some examples of legal names are Number_hits, temp99,
        and _name.
      </p>
    </main>
  );
}

export default Variable;
