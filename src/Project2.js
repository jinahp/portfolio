import pj1 from "./img/1.gif";
import pj10 from "./img/10.gif";
import pj11 from "./img/11.gif";
import pj12 from "./img/12.gif";
import pj13 from "./img/13.gif";
import pj14 from "./img/14.gif";
import pj15 from "./img/15.gif";
import pj16 from "./img/16.gif";
import pj2 from "./img/2.gif";
import pj3 from "./img/3.gif";
import pj4 from "./img/4.gif";
import pj5 from "./img/5.gif";
import pj6 from "./img/6.gif";
import pj7 from "./img/7.gif";
import pj8 from "./img/8.gif";

import React from "react";
import Collapse from "./Collapse";
import "./project.scss";

function Project2() {
  return (
    <>
      <div class="wrapper v3">
        <Collapse title={<h4 class="skill">＜Project 2 /＞</h4>}>
          <div class="gifZip">
            <div class="gitTitle">
              [Personal Project Github Link]
              <br />
            </div>
            <a
              class="github"
              href="https://github.com/jinahp/shop"
              target="_blank"
            >
              https://github.com/jinahp/shop
            </a>
            <br />
            <div class="question2">
              Q1. 프로젝트 기획의도
              <br />
              <div class="answer">
                React와 Spring Boot를 활용하여 쇼핑몰 웹사이트를 개발했습니다.
                <br />
                프론트엔드에서는 Redux Toolkit을 사용하여 상태 관리를 처리하고,
                백엔드에서는 MyBatis를 이용하여 데이터베이스와의 연동을
                처리합니다. 최소한의 디자인과 기능으로 사용자들이 원하는 상품을
                검색하고 주문하는 기본적인 기능을 구현하여 프론트엔드와 백엔드를
                연동하는 경험을 쌓았습니다.
                <br />
              </div>
              Q2. 프로젝트 기간
              <br />
              <div class="answer">
                2023.07.03. ~ 2023.07.30.
                <br />
              </div>
              Q3. 꽃집 쇼핑몰 기능 정리
              <br />
              <img class="gifs" src={pj1} />
              <div class="answer">
                1. React-bootStrap을 이용해 캐러셀 구현
                <br />
              </div>
              <h3 class="top">회원가입과 로그인 기능</h3>
              <img class="gifs" src={pj8} />
              <div class="answer">
                1. Yup을 이용해 회원가입 Form 유효성 검사 구현
                <br />
                2. 회원 데이터는 Axios로 Post하여 Spring Boot 백엔드로 전송
              </div>
              <img class="gifs" src={pj10} />
              <div class="answer">
                1. 로그인 ID/PW 체크 구현
                <br />
                2. 로그인된 데이터는 Redux에 저장
              </div>
              <h3 class="top">직관적인 인터페이스 구현</h3>
              <img class="gifs" src={pj2} />
              <div class="answer">
                1. React-bootStrap을 이용해 내비게이션 메뉴탭 구현
                <br />
                2. React Router를 사용하여 다중페이지 구현
              </div>
              <img class="gifs" src={pj14} />
              <div class="answer">
                1. 상품 상세 페이지 구현
                <br />
                2. 카테고리를 클릭시 navigate 함수로 화면 이동 구현
              </div>
              <img class="gifs" src={pj3} />
              <div class="answer">
                1. 옵션 클릭 시 리스트 추가 구현
                <br />
                2. 수량 변경 시 총액 계산 구현
              </div>
              <img class="gifs" src={pj4} />
              <div class="answer">
                1. 상품 선택 후 장바구니로 이동 구현
                <br />
                2. 장바구니에 담긴 데이터는 Redux에 저장
              </div>
              <h3 class="top">장바구니와 주문하기 기능</h3>
              <img class="gifs" src={pj5} />
              <div class="answer">
                1. 장바구니에서 수량 변경 구현
                <br />
                2. 장바구니에 담긴 상품 총액 계산 구현
              </div>
              <img class="gifs" src={pj15} />
              <div class="answer">
                1. 주문자 정보와 장바구니에 담긴 상품을 Redux에서 가져옴
                <br />
                2. DaumPostcode 컴포넌트를 사용하여, 우편번호 검색 서비스 구현
                <br />
                3. React-bootstrap 모달을 사용하여 팝업창 구현
              </div>
              <img class="gifs" src={pj16} />
              <div class="answer">1. 주문 데이터를 Back-end로 전송 구현</div>
              <h3 class="top">상품 검색 기능</h3>
              <img class="gifs" src={pj6} />
              <img class="gifs" src={pj7} />
              <div class="answer">
                1. 검색 기능 구현
                <br />
                2. 검색한 상품 클릭 시 화면 이동 구현
              </div>
              <h3 class="top">Q&A 게시판 CRUD 구현(Spring Boot Back-end)</h3>
              <img class="gifs" src={pj11} />
              <div class="answer">1. READ 구현</div>
              <img class="gifs" src={pj12} />
              <div class="answer">2. CREATE/DELETE 구현</div>
              <img class="gifs" src={pj13} />
              <div class="answer">3. UPDATE 구현</div>
              Q4. 사용언어 및 라이브러리
              <br />
              <div class="answer">
                JavaScript, React, React-Bootstrap, SCSS, Axios, Redux Toolkit,
                Yup, Spring Boot, MyBatis, MySQL
                <br />
              </div>
              Q5. 프로젝트를 경험하고 느낀 점
              <br />
              <div class="answer">
                프로젝트를 처음부터 끝까지 개발하면서 발생한 오류들을 해결해
                나가는 과정은 도전적이고 힘든 일이지만, 동시에 많은 성취감을
                느끼는 기회였습니다. 다양한 기술과 개념을 습득하고 적용하면서
                프로젝트가 발전하는 게 즐거웠습니다. 이러한 경험들을 바탕으로
                계속해서 도전적인 프로젝트에 참여하고 성장해 나가고자 합니다.
                <br />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}
export default Project2;
