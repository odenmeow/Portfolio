import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const MyAutoMechine = () => {
  const [isZoomed, setIsZoomed] = useState(false);
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

  // 不需要位移 不使用useEffect 做渲染後期調整
  return (
    <Layout>
      <div>
        {/* Add your custom 404 content here */}
        <section className={style["main-area"]}>
          <div style={{ position: "relative" }} className={style.info}>
            <h1 style={{ textAlign: "center" }}>遊戲助手</h1>
            <br />
            <h1 style={{ textAlign: "center" }}>LineBot+GPIO</h1>
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
            <p style={{ textAlign: "center" }}>
              {`畢業前比較空閒，突然想到好像能夠做出來，`}
              <br />
              <br />
              {`就做了這個樹梅派APP自動控制裝置，`}
              <br />
              <br />
              {`主要是 Python OpenCV、GPIO、`}
              <br />
              <br />
              {`以及 tensorflow 輔助辨識。`}
              <br />
              <br />
            </p>

            <p style={{ textAlign: "center" }}>
              {`有些東西，例如 : LineBot，剛好學校有門課，`}
              <br />
              <br />
              {`大綱有雲端的部分，要求作業要含有雲端概念，`}
              <br />
              <br />
              {`當時和另一個年紀較大的美國大叔一起製作、`}
              <br />
              <br />
              {`使用GPIO提供的功能，做一個測量生態池的裝置，`}
              <br />
              <br />
              {`同時，能夠紀錄藻類 (duckweed) 的增長速率，`}
              <br />
              <br />
              {` 透過opencv提供的基本功能，能偵測出綠色的範圍，`}
              <br />
              <br />
              {`使用GPIO提供的功能，做一個測量生態池的裝置，`}
              <br />
              <br />
              {`每日變動的時候透過LineBot通知。`}
              <br />
              <br />

              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1OGjaPSfjTVycWB6mmuv5dF-BrGopDrvXtwcBdo0DxFY/edit?usp=sharing"
              >
                (GOOGLE PPT)
              </a>
            </p>
            <h2>設計</h2>
            <p style={{ textAlign: "center" }}>
              {`關於控制的部分，我是使用GPIO +Relay，`}
              <br />
              <br />
              {`然後把鍵盤拆下來，將接點拉出來，透過繼電器模擬人按鍵盤。`}
              <br />
              <br />
            </p>

            <div className={style["blog-img-container"]}>
              <ControlledZoom isZoomed={isZoomed} classDialog="zoom-btn">
                <Image
                  onClick={handleImageClick}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    transform: "translate(50%,0)",
                    width: "50%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/Oni/images/relay_wire.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>

            <p style={{ textAlign: "center" }}>
              {`製作個人專屬的Physical Cheat Bot，`}
              <br />
              <br />
              {`遊戲就不需要自己動手玩了，只要一邊看著影片一邊等著回饋。`}
              <br />
              <br />
            </p>
            <hr />

            <div className={style["blog-img-container"]}>
              <div className={style["blog-img"]}>
                <Image
                  width={48}
                  height={48}
                  alt="me"
                  src="/project3/images/ICONS/icons8-youtube.svg"
                  layout="fill"
                />
              </div>
              <div className={style["blog-img"]}>
                {/* <h2 style={{ display: "inline-block", margin: "5px" }}>連結</h2> */}
                <p style={{ margin: "0", textAlign: "center" }}>
                  <a target="_blank" href="https://youtu.be/1lrZnBvX0ho">
                    實機影片
                  </a>
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default MyAutoMechine;
