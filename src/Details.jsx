import React from "react";
import Intro from "./Components/Intro";
import Const from "./Components/Const";
import Declare from "./Components/Declare";
import Global from "./Components/Global";
import Know from "./Components/Know";
import Hello from "./Components/Hello";
import Java from "./Components/Java";
import Variable from "./Components/Variable";
import Types from "./Components/Types"
import IfElse from "./Components/IfElse"
import Scope from "./Components/Scope"
import Reference from "./Components/Reference"
import Function from "./Components/Function";
import While from "./Components/While";
function Details() {
  return (
    <div className="details">
      <section>
        <header>
          <Intro />
          <Know />
          <Java />
          <Hello />
          <Variable />
          <Declare />
          <Scope />
          <Global />
          <Const />
          <Types />
          <IfElse />
          <While />
          <Function />
          <Reference />
        </header>
      </section>
    </div>
  );
}

export default Details;
