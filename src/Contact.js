import masking from "./img/mas.png";

function Contact() {
  return (
    <>
      <div>
        <div class="second-box">
          <div class="masking">
            <img src={masking} />
          </div>
          <span class="aboutMe">CONTACT</span>
          <br />
          <br />
          <br />

          <span class="intro">
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
            <br />
            <span class="aboutQ">/GitHub</span>
            <br />
            <a class="aboutA" href="https://github.com/jinahp">
              https://github.com/jinahp
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Contact;
