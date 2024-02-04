import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const MongoDB = () => {
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
            <h1 style={{ textAlign: "center" }}>MongoDB+EJS</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>學生資訊網</h3> <br />
            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              target="_blank"
              href="https://portfolio-104l.onrender.com/students"
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
            <h2>Student Web</h2>
            <p style={{ textAlign: "center" }}>
              {`基本上是做Restful API，`}
              <br />
              <br />
              {`可以新增、修改、刪除、查詢(取得)`}
              <br />
              <br />
              {`學生資料的網站。`}
              <br />
            </p>
            <br /> <br />
            <h2>技術</h2>
            <p style={{ textAlign: "center" }}>
              {`主要是EJS、API、Mongoose的應用`}
              <br />
              <br />
              {`使用了method-override，
              讓方法覆寫`}
              <br />
              <br />
              {`讓表單可以送出GET、POST以外的PUT`}
              <br />
              <br />
              {`POST模擬，讓表單玩 Restful API`}
              <br />
              <br />
              {`從後端增加middleware，進行攔截行為，`}
              <br />
              <br />
              {`
              之後再往下傳遞，`}
            </p>
            <p
              style={{ textAlign: "center" }}
            >{`詳細內容在下方Github Project-Final 。`}</p>
            <p
              style={{ textAlign: "center" }}
            >{`(UdemyProjects皆用此Git+Render雲端製作)`}</p>
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
                  src="/Udemy/images/MongoDB1.png"
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
                  src="/Udemy/images/MongoDB2.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <br /> <br />
            <h2>操作方式</h2>
            <p style={{ textAlign: "center" }}>
              {` 【手機、電腦皆可】
            `}
            </p>
            <p style={{ textAlign: "center" }}>
              {` 隨意逛逛即可
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
                    href="https://github.com/odenmeow/FullStackLearn/tree/master/Project-Final"
                  >
                    Udemy Projects EJS
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

export default MongoDB;
