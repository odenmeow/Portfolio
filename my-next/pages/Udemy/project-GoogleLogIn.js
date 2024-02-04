import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const GoogleLogIn = () => {
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
      warn.style.right = "50%";
      warn.style.bottom = "85%";
      warn.style.transform = "translate(50%,0)";
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
    let mypic = btn.querySelector("img");
    mypic.style.userSelect = "none";
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
      warn.style.right = "50%";
      warn.style.bottom = "85%";
      warn.style.transform = "translate(50%,0)";
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
    let mypic = btn.querySelector("img");
    mypic.style.userSelect = "none";
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
      warn.style.right = "50%";
      warn.style.bottom = "85%";
      warn.style.transform = "translate(50%,0)";
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
    let mypic = btn.querySelector("img");
    mypic.style.userSelect = "none";
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
            <h1 style={{ textAlign: "center" }}>Google</h1>
            <h1 style={{ textAlign: "center" }}>登入系統</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>OAuth+passport</h3> <br />
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
            <h2>GoogleLogIn介紹</h2>

            <p style={{ textAlign: "center" }}>
              {`該網站可以簡單地新增貼文、`}
              <br />
              <br />
              {`查看自己發布過的消息，`}
            </p>
            <p style={{ textAlign: "center" }}>
              {`最主要是能透過Google進行登入。
              `}
              <br />
            </p>
            <h2>目的</h2>

            <p style={{ textAlign: "center" }}>
              {`課程包含不少Express後端的部分，`}
              <br />
              <br />
              {`本次學習Express的Google OAuth授權，`}
              <br />
              <br />
              {`使用EJS建出網頁，Google登入主要使用 passport套件，`}
              <br />
              <br />
              {`此登入系統也用了不少middleware概念，`}
              <br />
              <br />
              {`做完能更加了解 JS 後端操作。`}
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
                  src="/Udemy/images/GoogleLogIn1.png"
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
                  src="/Udemy/images/GoogleLogIn2.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <h2>操作方式</h2>
            <p style={{ textAlign: "center" }}>
              {` 【手機、電腦皆可】
            `}
            </p>
            <p style={{ textAlign: "center" }}>
              {`除了Google登入登出
            `}
              <br />
              {`也可以使用信箱註冊
            `}
              <br />
              {`登入後也能發布訊息(僅個人可見)
            `}
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
                  src="/Udemy/images/GoogleLogIn3.png"
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
                    href="https://github.com/odenmeow/UdemyFullStack/tree/master/Project7_GoogleLoginWeb"
                  >
                    GoogleLoginWeb
                  </a>
                </p>
                {/* <p style={{ margin: "0", textAlign: "center" }}>本地端版本</p> */}
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export default GoogleLogIn;
