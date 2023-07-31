import "animate.css";
import React from "react";
import "./ThirdBox.js";
import htmlPng from "./img/html1.png";
import javaPng from "./img/java.png";
import jsPng from "./img/js.png";
import jspPng from "./img/jsp.png";
import reactPng from "./img/reactt.png";
import sqlPng from "./img/sql.png";
import "./responsive.scss";

import Contact from "./Contact";
import Project from "./Project";
import Project2 from "./Project2";

function Main() {
  const list = [
    <span class="textIn line">성실히&nbsp;</span>,
    <span class="textIn line">노력한다면</span>,
    <span class="textIn name">&nbsp;성장</span>,
    <span class="textIn">에&nbsp;</span>,
    <span class="textIn name">끝은 없다</span>,
    <span class="textIn">고&nbsp;</span>,
    <span class="textIn">생각하는&nbsp;</span>,
    <span class="textIn">신입&nbsp;</span>,
    <span class="textIn">개발자&nbsp;</span>,
    <span class="textIn name">박진아</span>,
    <span class="textIn">입니다.</span>,
    <p></p>,
    <span class="textIn name">끊임없는 학습</span>,
    <span class="textIn">을 통해&nbsp;</span>,
    <span class="textIn">새로운&nbsp;</span>,
    <span class="textIn">기술을&nbsp;</span>,
    <span class="textIn">빠르게&nbsp;</span>,
    <span class="textIn">습득하고&nbsp;</span>,
    <p></p>,
    <span class="textIn">문제를&nbsp;</span>,
    <span class="textIn">해결할 수 있는&nbsp;</span>,
    <span class="textIn">능력을&nbsp;</span>,
    <span class="textIn">키우고&nbsp;</span>,
    <span class="textIn">있습니다.</span>,
  ];

  const introduce = list.map((item, i) => {
    const sec = 0.2 * i + 4;
    const style = {
      animation: `fade-in 0.8s ${sec}s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    };
    if (item.type === "p") return item;
    return <span style={style}>{item}</span>;
  });

  return (
    <>
      {/* intro */}
      <div class="main">
        <div class="main-background">
          <section>
            <div class="main-title">
              <h1>JINAH PORTFOLIO</h1>
              <h1>JINAH PORTFOLIO</h1>
            </div>
          </section>
          <p id="main-inner">Frontend Developer</p>
        </div>

        <Contact />

        <div class="textBox">{introduce}</div>

        {/* skills */}
        <div class="wrapper v1">
          <div class="skill">
            <h4>＜My Skills /＞</h4>
          </div>
          <div class="tooltip">
            <img class="icons" src={htmlPng} />
            <img class="icons" src={jsPng} />
            <img class="icons" src={javaPng} />
            <br />
            <img class="icons" src={jspPng} />
            <img class="icons" src={reactPng} />
            <img class="icons" src={sqlPng} />
          </div>
        </div>

        <Project />

        <Project2 />

        <button
          id="topBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TOP
        </button>
        <div id="fin">@ 2023. Jinah Park. All rights reserved.</div>
      </div>
    </>
  );
}

export default Main;
