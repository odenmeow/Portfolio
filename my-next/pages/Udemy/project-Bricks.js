import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const Bricks = () => {
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

  useEffect(() => {
    // 因為 ControlledZoom 替我製作多了一層div 所以要在渲染完畢後製作置中功能!
    // 在這裡進行元素選取和樣式修改
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      let imgParent = img.parentElement;
      if (imgParent.hasAttribute("data-rmiz-content")) {
        imgParent.style.display = "flex";
        imgParent.style.justifyContent = "center";
        imgParent.style.alignItems = "center";
      }
    });
    // imgParent.style.cssText = "display: flex; justify-content: center; align-items: center;";
  }, []); // 這個空的[]確保這個 effect 只執行一次，即在組件渲染後

  return (
    <Layout>
      <div>
        {/* Add your custom 404 content here */}
        <section className={style["main-area"]}>
          <div style={{ position: "relative" }} className={style.info}>
            <h1 style={{ textAlign: "center" }}>彈跳球</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>Designed for computer</h3>{" "}
            <br />
            <h5 style={{ textAlign: "center" }}>建議使用電腦</h5>
            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              target="_blank"
              href="https://portfolio-104l.onrender.com/project6/index"
            >
              直接前往
            </a>
            <a
              style={{ position: "absolute", right: "16px" }}
              href="#about-me-head"
            >
              了解更多
            </a>
          </div>
        </section>

        <section id="about-me-head" className={style["about-me"]}>
          <section className={style.description}>
            <h2>Bricks Game</h2>

            <p style={{ textAlign: "center" }}>
              {`製作小遊戲，類似打磚塊，`}
              <br /> <br />
              {`不過隨機生成磚塊位置，`}
              <br /> <br />
              {`主要為訓練邏輯、使用canvas。`}
            </p>
            <br />
            <br />
            <h2>設計</h2>
            <p style={{ textAlign: "center" }}>
              {`一樣使用canvas進行邏輯設計，`}
              <br />
              <br />
              {`只是二度練習而已，沒特別考慮外觀。`}
            </p>

            <div className={style["blog-img-container"]}>
              <ControlledZoom isZoomed={isZoomed} classDialog="zoom-btn">
                <Image
                  onClick={handleImageClick}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "50%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/Udemy/images/Bricks.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <br />
            <br />
            <h2>操作方式</h2>
            <p style={{ textAlign: "center" }}>
              {`
             滑鼠移動
            `}
            </p>

            <hr />
            <div
              style={{ paddingTop: "1rem" }}
              className={style["blog-img-container"]}
            >
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
                  <a target="_blank">無錄製</a>
                </p>
              </div>
            </div>
            <div className={style["blog-img-container"]}>
              <Image
                className={style["blog-img"]}
                width={48}
                height={48}
                alt="me"
                src="/project3/images/ICONS/icons8-github.svg"
                layout="fill"
              />
              <div className={style["blog-img"]}>
                {/* <h2 style={{ display: "inline-block", margin: "5px" }}>連結</h2> */}
                <p style={{ margin: "0", textAlign: "center" }}>
                  <a
                    target="_blank"
                    href="https://github.com/odenmeow/UdemyFullStack/tree/master/Project6_%E5%BD%88%E8%B7%B3%E7%90%83%E9%81%8A%E6%88%B2"
                  >
                    Bouncing
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

export default Bricks;
