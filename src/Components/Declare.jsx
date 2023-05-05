import React from 'react'

function Declare() {
  return (
    <main id="declare">
      <h1>Declaring variables</h1>
      <p>You can declare a variable in three ways:</p>
      <p>With the keyword var. For example,</p>
      <code>var x = 42 ;</code>
      <p>This syntax can be used to declare both local and global variables.</p>
      <p>By simply assigning it a value. For example,</p>
      <code>x = 42</code>
      <p>
        This always declares a global variable. It generates a strict JavaScript
        warning. You shouldn't use this variant.
      </p>
      <p>With the keyword let. For example,</p>
      <code>let y = 13</code>
      <p>
        This syntax can be used to declare a block scope local variable. See
        Variable scope below.
      </p>
    </main>
  );
}

export default Declare