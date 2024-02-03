import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const FlipCard = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  // 舊版本 ( 不是透過btn關閉，而是有滑鼠事件就自動關閉 )
  // const handleZoomChange = useCallback((shouldZoom) => {
  //   setIsZoomed(shouldZoom);
  // }, []);

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

  const [isZoomed2, setIsZoomed2] = useState(false);
  const handleImageClick2 = () => {
    (function showWarn() {
      let body = document.querySelector(".zoom-btn2 > div:nth-child(2)");
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

    console.log("shouldZoom2");
    setIsZoomed2(true);

    let btn = document.querySelector(".zoom-btn2");
    btn.addEventListener("dblclick", (e) => {
      console.log("設定為false");
      setIsZoomed2(false);
    });

    btn.querySelector("button").addEventListener("click", (e) => {
      console.log("設定為false");
      setIsZoomed2(false);
    });
  };

  const [isZoomed3, setIsZoomed3] = useState(false);
  const handleImageClick3 = () => {
    (function showWarn() {
      let body = document.querySelector(".zoom-btn3 > div:nth-child(2)");
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

    console.log("shouldZoom3");
    setIsZoomed3(true);

    let btn = document.querySelector(".zoom-btn3");
    btn.addEventListener("dblclick", (e) => {
      console.log("設定為false");
      setIsZoomed3(false);
    });

    btn.querySelector("button").addEventListener("click", (e) => {
      console.log("設定為false");
      setIsZoomed3(false);
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
            <h1 style={{ textAlign: "center" }}>翻卡牌遊戲</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>Made with Java</h3> <br />
            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              target="_blank"
              href="https://portfolio-104l.onrender.com/project7/index"
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
            <h2>遊戲介紹</h2>
            <br />

            <p style={{ textAlign: "center" }}>
              {`隨處可見的翻卡牌遊戲，`}
              <br />
              <br />
              {`比較特殊的地方是自適應視窗`}
              <br />
              <br />
              {`可以手動調整視窗任意大小、`}
              <br />
              <br />
              {`不是預先就寫死程式視窗大小，`}
              <br />
              <br />
              {`以及能夠提供卡片畫面。`}
            </p>
            <br />

            <h2>實現方式</h2>
            <br />

            <p style={{ textAlign: "center" }}>
              {`主要透過JPanel+JFrame進行製作，`}
              <br />
              <br />
              {`實際上卡片使用GridLayout切割，`}
              <br />
              <br />
              {`比較難的點在於翻卡牌的翻這件事，`}
              <br />
              <br />
              {`還有碰碰的邏輯，要額外紀錄位置，`}
              <br />
              <br />
              {`記錄卡牌位置(name)，而非比較像素，`}
              <br />
              <br />
              {`將對應位置映射，能增加比較速度，`}
              <br />
              <br />
              {`使用了不少Hash、ArrayList幫忙，`}
              <br />
              <br />
              {`有些圖片是假的jpg，程式會無法運作!`}
              <br />
              <br />
            </p>
            <div
              style={{ margin: "2rem 0" }}
              className={style["blog-img-container"]}
            >
              <ControlledZoom
                isZoomed={isZoomed}
                // onZoomChange={handleZoomChange}
                classDialog={"zoom-btn"}
              >
                <Image
                  onClick={handleImageClick}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "70%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/ISpan/images/FlipCard1.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>

              <ControlledZoom
                isZoomed={isZoomed2}
                // onZoomChange={handleZoomChange}
                classDialog={"zoom-btn2"}
              >
                <Image
                  onClick={handleImageClick2}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "70%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/ISpan/images/FlipCard2.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <h2>操作</h2>
            <p style={{ textAlign: "center" }}>{`【Java環境】`}</p>
            <p style={{ textAlign: "center" }}>
              <br />
              {`要先提供足夠的卡片，以及背面卡`}
              <br />
              {`背面卡需命名Cat2.jpg`}
              <br />
            </p>
            <div
              style={{ margin: "2rem 0" }}
              className={style["blog-img-container"]}
            >
              <ControlledZoom
                isZoomed={isZoomed3}
                // onZoomChange={handleZoomChange}
                classDialog={"zoom-btn3"}
              >
                <Image
                  onClick={handleImageClick3}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "40%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/ISpan/images/FlipCard3.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
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
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=jT9eimLxnx8"
                  >
                    翻CARD
                  </a>
                </p>
              </div>
            </div>
            {/* <div className={style["blog-img-container"]}>
              <Image
                className={style["blog-img"]}
                width={48}
                height={48}
                alt="me"
                src="/project3/images/ICONS/icons8-github.svg"
                layout="fill"
              />
              <div className={style["blog-img"]}>
                
                <p style={{ margin: "0", textAlign: "center" }}>
                  <a target="_blank"></a>
                </p>
              </div>
            </div> */}
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default FlipCard;
