import React from "react";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";
const YoichiApp = () => {
  return (
    <Layout>
      <div>
        {/* Add your custom 404 content here */}
        <section className={style["main-area"]}>
          <div style={{ position: "relative" }} className={style.info}>
            <h1 style={{ textAlign: "center" }}>夜市APP</h1>
            <br />
            <h1 style={{ textAlign: "center" }}>Yoichi</h1>
            <a
              style={{ marginLeft: "50%", transform: "translate(-50%,0)" }}
              href="#about-me-head"
            >
              了解更多
            </a>
          </div>
        </section>

        <section id="about-me-head" className={style["about-me"]}>
          <section className={style.description}>
            <h2>關於我的樹梅派計畫</h2>
            <p>
              畢業前比較空閒，但也沒去想到找工作的問題，就只是突然想到好像可以做出來，
              就做了這個樹梅派APP自動控制裝置，主要是 Python OpenCV、GPIO 以及
              tensorflow 輔助辨識。
            </p>
            <p>
              有些東西，例如 :
              LineBot，剛好學校有門課，修到雲端概念的部分，有要求作業要含有雲端概念，
              當時和另一個年紀較大的美國大叔，一起製作與使用GPIO提供的功能，買零件做出一個測量生態池的裝置，
              同時，能夠紀錄藻類 (duckweed)
              的增長速率，透過opencv提供的基本功能，能偵測出綠色的範圍，每日變動的時候透過LineBot通知。
              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1OGjaPSfjTVycWB6mmuv5dF-BrGopDrvXtwcBdo0DxFY/edit?usp=sharing"
              >
                (GOOGLE PPT)
              </a>
            </p>
            <h2>設計</h2>
            <p style={{ textAlign: "center" }}>
              關於控制的部分，我是使用GPIO +
              Relay，然後把鍵盤拆下來，將接點拉出來，透過繼電器模擬人類按鍵盤
            </p>
            <div className={style["blog-img-container"]}>
              <Image
                className={style["blog-img"]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "50%", height: "auto" }}
                alt="me"
                src="/Oni/images/relay_wire.png"
                layout="fill"
                priority={true}
              />
            </div>
            <p>
              製作個人專屬的Physical Cheat
              Bot，遊戲就不需要自己動手玩了，只要一邊看著影片一邊等著回饋。
            </p>
            <div className={style["blog-img-container"]}>
              <Image
                className={style["blog-img"]}
                width={48}
                height={48}
                alt="me"
                src="/project3/images/ICONS/icons8-youtube.svg"
                layout="fill"
              />

              <h2
                className={style["blog-img"]}
                style={{ display: "inline-block", margin: "5px" }}
              >
                連結
              </h2>
            </div>
            <p style={{ textAlign: "center" }}>
              <a target="_blank" href="https://youtu.be/1lrZnBvX0ho">
                實機影片
              </a>
            </p>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default YoichiApp;