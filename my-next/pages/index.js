import Layout from "../components/layout";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../styles/Home.module.css";
import styleB from "../styles/bubble.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styleB.bubbleBackgroundWrap}>
        <div className={`${styleB.bubble} ${styleB.x1}`}></div>
        <div className={`${styleB.bubble} ${styleB.x2}`}></div>
        <div className={`${styleB.bubble} ${styleB.x3}`}></div>
        <div className={`${styleB.bubble} ${styleB.x4}`}></div>
        <div className={`${styleB.bubble} ${styleB.x5}`}></div>
        <div className={`${styleB.bubble} ${styleB.x6}`}></div>
        <div className={`${styleB.bubble} ${styleB.x7}`}></div>
        <div className={`${styleB.bubble} ${styleB.x8}`}></div>
        <div className={`${styleB.bubble} ${styleB.x9}`}></div>
        <div className={`${styleB.bubble} ${styleB.x1}`}></div>
      </div>
      <section className={style["main-area"]}>
        <div className={style.info}>
          <h1>嗨，I'm Oni.</h1>
          <h2>
            想往後端工程師發展，但前端頁面也有概念、能實作。
            <br />
            希望找到是JAVA SpringBoot相關工作。
          </h2>
          <a href="#about-me-head">了解更多</a>
        </div>
        <div className={style["img-area"]}>
          <img src="/project3/images/貓貓彎曲三角形.png" alt="貓貓頭貼" />
        </div>
      </section>

      <section id="about-me-head" className={style["about-me"]}>
        <section className={style.description}>
          <h2>關於我的一些事情</h2>
          <p>
            宜大資工系，2021/6畢業，大三專題做 Android
            腦波辨識App，主要負責後端，畢業前又做一個自己的樹梅派App自動玩遊戲裝置，主要是python
            opencv以及tensorflow輔助辨識。
          </p>
          <p>
            當兵後想說找純軟，覺得能力不夠看 + 得知政府補助資訊，就去資策會進修
            Java 跟 Spring
            的部分，2023/5/18結訓。後歷經開刀，開始投遞Resume已是8月了，
            佛系投履歷，期間自修加深SpringBoot與全端技能。
          </p>
          <div className={style["skill-descriptions"]}>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>主要技能</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <p>Java、SpringBoot、HTML、CSS 、JavaScript 、MySQL . . .</p>
              </div>
            </div>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>接觸過</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <p>
                  Swagger、unitest、integrated test、Postman、Ngrok (for WAN )
                  、JWT、SpringSecurity、AOP、Filter、Mockito、Lombok、ObjectMapper
                  (Json、Gson之類)... docker 部署 springboot專案 。
                </p>
              </div>
            </div>
            <div className={style["skill-description"]}>
              <div className={style["skill-main-title"]}>
                <h3>Tools</h3>
              </div>
              <div className={style["skill-more-information"]}>
                <p>Mongodb、Docker、Git、Eclipse、Idea、.md (筆記) . . .</p>
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
              <ProgressBar striped variant="info" animated now={65} />
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
                  宜大畢，尋找 Web 職缺中，熟悉Java
                  SpringBoot，喜歡一語多意的雙關梗。
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
                    <li>資策會專題</li>
                    <li>Udemy課程</li>
                    <li>自製專案</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>語言</td>
                <td>
                  <p>弱 中 強 精通 母語</p>
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
                  <img
                    src="/project3/images/ICONS/icons8-css3.svg"
                    alt="CSSIcon"
                  />
                  、
                  <img
                    src="/project3/images/ICONS/icons8-html-5.svg"
                    alt="HTMLIcon"
                  />
                  、
                  <img
                    src="/project3/images/ICONS/icons8-javascript.svg"
                    alt="JavaScriptIcon"
                  />
                  、
                  <img
                    src="/project3/images/ICONS/icons8-java.svg"
                    alt="JavaIcon"
                  />
                  、
                  <img
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
                    <li>數個 Web 網頁</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={style.picture}>
          <img src="/project3/images/oni.png" alt="me" />
          <div className={style.greenRect1}></div>
          <div className={style.greenRect2}></div>
          <div className={style.greenRect3}></div>
        </section>
      </section>
    </Layout>
  );
}
