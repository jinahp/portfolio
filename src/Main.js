import "animate.css";
import React, { useState } from "react";
import fiveGif from "./img/five.gif";
import fourGif from "./img/four.gif";
import htmlPng from "./img/html1.png";
import javaPng from "./img/java.png";
import jsPng from "./img/js.png";
import jspPng from "./img/jsp.png";
import masking from "./img/mas.png";
import nodePng from "./img/node.png";
import oneGif from "./img/one.gif";
import reactPng from "./img/reactt.png";
import sqlPng from "./img/sql.png";
import threeGif from "./img/three.gif";
import twoGif from "./img/two.gif";
import jQueryPng from "./img/jquery.png";
import "./Main.scss";
import "./ThirdBox.js";

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
      <div class="main-background">
        <section>
          <div class="main-title">
            <h1>JINAH PORTFOLIO</h1>
            <h1>JINAH PORTFOLIO</h1>
          </div>
        </section>
        <p id="main-inner">Frontend Developer</p>
      </div>

      {/* about */}
      <div>
        <div class="second-box">
          <div class="masking">
            <img src={masking} />
          </div>
          <span class="intro">About Me</span>
          <br />
          <br />
          <br />

          <span class="aboutMe">
            <span class="aboutQ">/Name</span>
            <br />
            <span class="aboutA">박진아</span>
            <br />
            <span class="aboutQ">/Blog</span>
            <br />
            <a
              class="aboutA"
              href="https://velog.io/@raspberry"
              target="_blank"
            >
              {" "}
              velog.io/@raspberry
            </a>
            <br />
            <span class="aboutQ">/Email</span>
            <br />
            <a class="aboutA" href="mailto:monsatfri@gmail.com">
              monsatfri@gmail.com
            </a>
            &nbsp;
          </span>
        </div>
      </div>
      <br />

      <div class="textBox">{introduce}</div>

      {/* skills */}
      <div class="wrapper v1">
        <div class="skill">
          <h4>My Skills</h4>
        </div>
        <div class="tooltip">
          <img class="icons" src={htmlPng} />
          <img class="icons" src={jsPng} />
          <img class="icons" src={javaPng} />
          <img class="icons" src={jspPng} />
          <img class="icons" src={nodePng} />
          <img class="icons" src={reactPng} />
          <img class="icons" src={sqlPng} />
          <img class="icons" src={jQueryPng} />
        </div>
      </div>

      {/* project */}
      <div class="wrapper v2">
        <div class="skill">
          <h4>Project</h4>
        </div>
      </div>

      <div class="gifZip">
        <div class="gitTitle">
          [Team Project Github Link]
          <br />
        </div>
        <a
          class="github"
          href="https://github.com/woo-ng/react-front"
          target="_blank"
        >
          {" "}
          https://github.com/woo-ng/react-front
        </a>
        <br />
        <div class="question1">
          Q1. 프로젝트 기획의도
          <br />
          <div class="answer">
            오늘의집을 클론코딩하여 실제 서비스를 분석하고, 이를 기반으로 새로운
            웹사이트를 만들며, 프로그래밍 기술 연습과 경험을 쌓기 위한
            프로젝트입니다.
            <br />
          </div>
          Q2. 프로젝트 기간
          <br />
          <div class="answer">
            2023.02.07. ~ 2023.03.13.
            <br />
          </div>
          Q3. 해당 프로젝트에서 맡은 파트 <br />
          <img class="gifs" src={oneGif} />
          <div class="answer">
            1. React-router로 페이지 이동 구현
            <br />
            2. css로 이미지 확대 효과 구현
            <br />
            3. 타이머 기능 구현
            <br />
          </div>
          <img class="gifs" src={twoGif} />
          <div class="answer">
            4. 마우스 오버시 카테고리 열림 기능 구현
            <br />
            5. 옵션 및 수량 선택 기능 구현
            <br />
          </div>
          <img class="gifs" src={threeGif} />
          <div class="answer">
            6. 수량 선택시 계산 기능 구현
            <br />
          </div>
          <img class="gifs" src={fourGif} />
          <div class="answer">
            7. 본문 전체보기 버튼 클릭시 이미지 보이기/감추기 기능 구현
            <br />
          </div>
          <img class="gifs" src={fiveGif} />
          <div class="answer">
            8. React-Bootstrap 이용하여 다섯가지 탭기능 구현
            <br />
          </div>
          Q4. 사용언어 및 라이브러리
          <br />
          <div class="answer">
            JavaScript, React, Bootstrap, jQuery, SCSS, Axios
            <br />
          </div>
          Q5. 프로젝트를 경험하고 느낀 점
          <br />
          <div class="answer">
            혼자서는 해결하기 어려웠던 문제들을 함께 고민하고 해결할 수 있어서
            좋았습니다.
            <br />
            팀원들과의 소통이 원활하지 않았을 때는 직접 대화를 통해 문제를
            해결하여 대인관계나 소통 능력을 향상시키는 좋은 경험이었습니다.
            팀프로젝트 경험을 통해 프로젝트 관리 기술과 문제 해결 능력을
            향상시킬 수 있었으며, 다양한 사람들과 함께 일하면서 서로 존중하며,
            협업 능력을 향상시킬 수 있는 소중한 경험이라고 생각합니다.
            <br />
          </div>
        </div>
        <div id="fin">@ 2023. Jinah Park. All rights reserved.</div>
      </div>
    </>
  );
}

export default Main;
