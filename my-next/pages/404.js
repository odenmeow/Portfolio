import React from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        {/* Add your custom 404 content here */}
        <section className={style["main-area"]}>
          <div style={{ position: "relative" }} className={style.info}>
            <h1 style={{ textAlign: "center" }}>404 - Not Found</h1>
            <br />
            <Link
              style={{ marginLeft: "50%", transform: "translate(-50%,0)" }}
              className={style["link-to-home"]}
              href="/"
            >
              回首頁
            </Link>
          </div>
        </section>

        {/* <section id="about-me-head" className={style["about-me"]}>
          <section className={style.description}>
            <h2>關於我的一些事情</h2>
            <p>
              宜大資工系，2021/6畢業，大三專題做 Android
              腦波辨識App，主要負責後端，畢業前又做一個自己的樹梅派App自動玩遊戲裝置，主要是python
              opencv以及tensorflow輔助辨識。
            </p>
            <p>
              當兵後想說找純軟，覺得能力不夠看 +
              得知政府補助資訊，就去資策會進修 Java 跟 Spring
              的部分，2023/5/18結訓。後歷經開刀，開始投遞Resume已是8月了，
              佛系投履歷，期間自修加深SpringBoot與透過Udemy增加一些全端技能。
            </p>
            <div className={style["skill-descriptions"]}></div>
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
        </section> */}
      </div>
    </Layout>
  );
};

export default NotFoundPage;
