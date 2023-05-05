import React from 'react'

function IfElse() {
  return (
    <main id="if">
      <h1>if...else statement</h1>
      <p>
        Use the if statement to execute a statement if a logical condition is
        true. Use the optional else clause to execute a statement if the
        condition is false. An if statement looks as follows:
      </p>
      <code>{`if (condition) { statement_1; } else { statement_2; }
`}</code>
      <p>
        condition can be any expression that evaluates to true or false. See
        Boolean for an explanation of what evaluates to true and false. If
        condition evaluates to true, statement_1 is executed; otherwise,
        statement_2 is executed. statement_1 and statement_2 can be any
        statement, including further nested if statements.
      </p>
      <p>
        You may also compound the statements using else if to have multiple
        conditions tested in sequence, as follows:
      </p>
      <code>
        {`if (condition_1) { statement_1; } else if (condition_2) {`}
        <br />
        {`statement_2; } else if (condition_n) { statement_n; } else {`}
        <br />
        {`statement_last; }`}
      </code>
      <p>
        In the case of multiple conditions only the first logical condition
        which evaluates to true will be executed. To execute multiple
        statements, group them within a block statement {`({ ... })`} . In
        general, it's good practice to always use block statements, especially
        when nesting if statements:
      </p>
      <code>
        {`if (condition) { statement_1_runs_if_condition_is_true;`} <br />
        {`statement_2_runs_if_condition_is_true; } else {
`}
        <br /> {`statement_3_runs_if_condition_is_false;`} <br />
        {`statement_4_runs_if_condition_is_false; }
`}{" "}
      </code>
      <p>
        It is advisable to not use simple assignments in a conditional
        expression, because the assignment can be confused with equality when
        glancing over the code. For example, do not use the following code:
      </p>
      <code>{`if (x = y) { /* statements here */ }
`}</code>
      <p>
        If you need to use an assignment in a conditional expression, a common
        practice is to put additional parentheses around the assignment. For
        example:
      </p>
      <code>{`if ((x = y)) { /* statements here */ }
`}</code>
    </main>
  );
}

export default IfElse