import React from "react";
import Collapse from "./Collapse";
import fiveGif from "./img/five.gif";
import fourGif from "./img/four.gif";
import oneGif from "./img/one.gif";
import threeGif from "./img/three.gif";
import twoGif from "./img/two.gif";
import "./project.scss";

function Project() {
  return (
    <>
      <div class="wrapper v2">
        <Collapse title={<h4 class="skill">＜Project 1 /＞</h4>}>
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
              https://github.com/woo-ng/react-front
            </a>
            <br />
            <div class="question1">
              Q1. 프로젝트 기획의도
              <br />
              <div class="answer">
                오늘의집을 클론코딩하여 실제 서비스를 분석하고, 이를 기반으로
                새로운 웹사이트를 만들며 프로그래밍 기술 연습과 협업 경험을 쌓기
                위한 프로젝트입니다.
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
                혼자서는 해결하기 어려웠던 문제들을 함께 고민하고 해결할 수
                있어서 좋았습니다.
                <br />
                팀원들과의 소통이 원활하지 않았을 때는 직접 대화를 통해 문제를
                해결하여 대인관계나 소통 능력을 향상시키는 좋은 경험이었습니다.
                팀프로젝트 경험을 통해 프로젝트 관리 기술과 문제 해결 능력을
                향상시킬 수 있었으며, 다양한 사람들과 함께 일하면서 서로
                존중하며, 협업 능력을 향상시킬 수 있는 소중한 경험이라고
                생각합니다.
                <br />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Project;
