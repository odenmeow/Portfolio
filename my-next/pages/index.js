import Layout from "../components/layout";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../styles/Home.module.css";
import styleB from "../styles/bubble.module.css";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const mainSikksLeft = ["Java", "SpringBoot", "HTML", "CSS", "JavaScript"];
const mainSikksRight = [
  "Node.js",
  "Express",
  "React",
  "Next",
  "MySQL",
  "MongoDB",
];
const contactSkillsLeft = [
  "Swagger",
  "unitest",
  "IntegratedTest",
  "Spring JWT",
  "AOP",
  "Filter",
  "Mockito",
  "Lombok",
  "ObjectMapper",
  "docker 部署 springboot專案",
];
const contactSkillsRight = [
  "Next.js",
  "React",
  "EJS",
  "Sass",
  "passport JWT 登入",
  "passport Google OAuth 登入",
];
export default function Home() {
  let [bubblestatus, setbubblestatus] = useState("go");
  const [isZoomed, setIsZoomed] = useState(false);
  useEffect(() => {
    const awakeServices = async () => {
      let data = await axios.get("https://portfolio-104l.onrender.com/");
      console.log("初次運作中(已敲醒webServices)");
    };
    awakeServices();
  }, []);
  const handleImageClick = () => {
    (function showWarn() {
      let body = document.querySelector(".zoom-btn > div:nth-child(2)");
      let warn = document.createElement("div");
      let text = document.createElement("p");
      text.style.margin = 0;
      text.innerText = "雙擊可縮小";
      warn.append(text);
      warn.className = "noSend alert alert-info";
      warn.setAttribute("role", "info");
      warn.style.position = "absolute";
      warn.style.right = "5%";
      warn.style.bottom = "5%";
      warn.style.width = "content-fit";
      warn.style.height = "5%";
      warn.style.margin = "0";
      warn.style.display = "flex";
      warn.style.justifyContent = "center";
      warn.style.alignItems = "center";
      body.append(warn);
      warn.addEventListener("animationend", (e) => {
        // e.target.remove();
      });
      warn.style.animation = "opacityTransitions 2.5s ease forwards";
    })();

    // 點選圖片時進行放大

    console.log("shouldZoom");
    setIsZoomed(true);

    let btn = document.querySelector(".zoom-btn");
    btn.addEventListener("dblclick", (e) => {
      console.log("設定為false");
      setIsZoomed(false);
    });

    btn.querySelector("button").addEventListener("click", (e) => {
      console.log("設定為false");
      setIsZoomed(false);
    });
  };
  const bubbleTogglehandler = (e) => {
    let wrap = document.querySelector(".bubbleCluster");
    wrap.classList.toggle("bubbleShow");
    if (wrap.classList.contains("bubbleShow")) {
      e.target.innerText = "停用泡泡";
      setbubblestatus("go");
      wrap.innerHTML = `
        <div class="${styleB.bubble} ${styleB.x1}"></div>
        <div class="${styleB.bubble} ${styleB.x2}"></div>
        <div class="${styleB.bubble} ${styleB.x3}"></div>
        <div class="${styleB.bubble} ${styleB.x4}"></div>
        <div class="${styleB.bubble} ${styleB.x5}"></div>
        <div class="${styleB.bubble} ${styleB.x6}"></div>
        <div class="${styleB.bubble} ${styleB.x7}"></div>
        <div class="${styleB.bubble} ${styleB.x8}"></div>
        <div class="${styleB.bubble} ${styleB.x9}"></div>
        <div class="${styleB.bubble} ${styleB.x10}"></div>
      `;
    } else {
      e.target.innerText = "啟用泡泡";
      wrap.innerHTML = "";
      setbubblestatus("go");
    }
  };
  return (
    <Layout bubblestatus={bubblestatus}>
      <section className={style["main-area"]}>
        <div style={{ position: "relative" }} className={style.info}>
          <h1 style={{ textAlign: "center" }}>嗨，I&apos;m Oni.</h1>
          <br />
          <h2 style={{ textAlign: "center" }}>
            想往後端工程師發展，前端也能實作。
            <br /> <br />
            尋找 Java SpringBoot + React 相關工作。
          </h2>
          <a
            className={style.stopBubble}
            onClick={bubbleTogglehandler}
            style={{ position: "relative", left: "16px" }}
          >
            停用泡泡
          </a>
          <a
            style={{ position: "absolute", right: "16px" }}
            href="#about-me-head"
          >
            了解更多
          </a>
        </div>
        <div className={style["img-area"]}>
          <Image
            className={style.nextImage}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "90%", height: "auto" }}
            src="/project3/images/貓貓彎曲三角形.png"
            alt="貓貓頭貼"
          />
        </div>
      </section>

      <section id="about-me-head" className={style["about-me"]}>
        <section className={style.description}>
          <h2>關於我的一些事情</h2>
          <br />

          <p style={{ textAlign: "center" }}>
            {`宜大資工系，2021/6畢業，`}
            <br />
            <br />
            {`大三專題做Android腦波辨識APP，`}
            <br />
            <br />
            {`主要負責後端，也接手被拋棄的app。`}
            <br />
            <br />
            {`畢業前做了樹梅派自動玩遊戲裝置，`}
            <br />
            <br />
            {`主要是python、opencv，`}
            <br />
            <br />
            {`以及tensorflow輔助辨識。`}
          </p>

          <br />
          <br />

          <p style={{ textAlign: "center" }}>
            {`當兵後想說找純軟，看了看104資訊，`}
            <br />
            <br />
            {`發現蠻多都是網站的職缺，`}
            <br />
            <br />
            {`剛好得知課程政府有補助資訊，`}
            <br />
            <br />
            {`就去資策會進修 Java、Spring框架，`}
            <br />
            <br />
            {`2023/5/18結訓。後歷經鼻子開刀，`}
            <br />
            <br />
            {`開始投遞Resume已是8月了，`}
            <br />
            <br />
            {`投遞期間自修、加深SpringBoot、`}
            <br />
            <br />
            {`也從Udemy增加一些全端技能。`}
          </p>
          <br />
          <hr />
          <div className={style["skill-descriptions"]}>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>主技能</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <div className={style["skill-more-information"]}>
                  <div className={style["skill-more-info-left"]}>
                    {mainSikksLeft.map((skill, index) => (
                      <p key={skill + index}>{skill}</p>
                    ))}
                  </div>
                  <div className={style["skill-more-info-right"]}>
                    {mainSikksRight.map((skill, index) => (
                      <p key={skill + index}>{skill}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>接觸過</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <div className={style["skill-more-info-left"]}>
                  {contactSkillsLeft.map((skill, index) => (
                    <p key={skill + index}>{skill}</p>
                  ))}
                </div>
                <div className={style["skill-more-info-right"]}>
                  {contactSkillsRight.map((skill, index) => (
                    <p key={skill + index}>{skill}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>Tools</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <p>
                  Postman、Ngrok 、Docker、Git、Eclipse、Idea、VsCode、.md
                  (MarkText)、Render (雲端部屬) . . .
                </p>
              </div>
            </div>
          </div>
          <div className={style["progress-bar-area"]}>
            <p className={style["my-skills-group"]}>
              Java, SpringBoot, WebDevelopment
            </p>
            <div className={style.progress}>
              <ProgressBar striped variant="success" animated now={65} />
            </div>
            <p className={style["my-skills-group"]}>CSS, HTML , JavaScript</p>
            <div className={style.progress}>
              <ProgressBar striped variant="info" animated now={55} />
            </div>
            <p className={style["my-skills-group"]}>MySQL</p>
            <div className={style.progress}>
              <ProgressBar striped variant="warning" animated now={45} />
            </div>
          </div>
        </section>
      </section>

      <section className={style.resume}>
        <section className={style.table}>
          <table>
            <tbody>
              <tr style={{ borderTop: "solid gray 2px" }}>
                <td style={{ width: "20%" }}>自我簡介</td>
                <td style={{ width: "80%" }}>
                  宜大畢，尋找 Web 職缺中。 <br /> 喜歡一語多意的雙關梗、
                  ACG、J-Music。
                </td>
              </tr>
              <tr>
                <td>學歷</td>
                <td>國立宜蘭大學 資訊工程系 學士</td>
              </tr>
              <tr>
                <td>經歷</td>
                <td>
                  <ul>
                    <li>大學專題</li>
                    <li>自製專案</li>
                    <li>資策會專題</li>
                    <li>Udemy課程</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>語言</td>
                <td>
                  <p>弱 ~ 中 ~ 強 ~ 精通 ~ 母語</p>
                  <ul>
                    <li>中文 : 母語</li>
                    <li>英文 : 中</li>
                    <li>日文 : 弱</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>專長</td>
                <td>
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-css3.svg"
                    alt="CSSIcon"
                  />
                  、
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-html-5.svg"
                    alt="HTMLIcon"
                  />
                  、
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-javascript.svg"
                    alt="JavaScriptIcon"
                  />
                  、
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-react.svg"
                    alt="ReactIcon"
                  />
                  、
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-java.svg"
                    alt="JavaIcon"
                  />
                  、
                  <Image
                    width={48}
                    height={48}
                    src="/project3/images/ICONS/icons8-spring-boot.svg"
                    alt="SpringBootIcon"
                  />
                </td>
              </tr>
              <tr>
                <td>開發經驗</td>
                <td>
                  <ul>
                    <li>
                      兩次合作分別是大學跟資策會的專題，其他都是獨立開發。
                    </li>
                    <li>
                      樹梅派auto game playing machine (Python+opencv+GPIO)
                    </li>
                    <li>數個 Web 網頁，詳閱側邊欄位</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={style.picture}>
          <ControlledZoom
            isZoomed={isZoomed}
            // onZoomChange={handleZoomChange}
            classDialog={"zoom-btn"}
          >
            <Image
              className={style.nextImage}
              onClick={handleImageClick}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "80%",
                height: "auto",
              }}
              alt="me"
              src="/project3/images/portrait.jpg"
              layout="fill"
              priority={true}
            />
          </ControlledZoom>

          <div className={style.greenRect1}></div>
          <div className={style.greenRect2}></div>
          <div className={style.greenRect3}></div>
        </section>
      </section>
    </Layout>
  );
}
