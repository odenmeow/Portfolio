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
            <h1 style={{ textAlign: "center" }}>Original Shop</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>Java</h3> <br />
            <div className={style["blog-img-container"]}>
              <a style={{ position: "center" }} href="#about-me-head">
                了解更多
              </a>
            </div>
          </div>
        </section>

        <section id="about-me-head" className={style["about-me"]}>
          <section className={style.description}>
            <h2>介紹</h2>
            <br />

            <p style={{ textAlign: "center" }}>
              {`這是我的職訓課程的結業專題，`}
              <br />
              <br />
              {`第一次以六人為組的作品，`}
              <br />
              <br />
              {`Java + JSP + SpringBoot，`}
              <br />
              <br />
              {`作品為仿電商的概念去製作的，`}
              <br />
              <br />
              {`前端使用bootstrap、JSP製作，`}
              <br />
              <br />
              {`後端則使用SpringBoot。`}
              <br />
              <br />
              {`實現基本的註冊、登入功能、`}
              <br />
              <br />
              {`商品查詢、商品陳列、購物車效果，`}
              <br />
              <br />
              {`也串接綠界金流、綠界物流，`}
              <br />
              <br />
              {`也額外添加了Gmail的寄信功能。`}
            </p>
            <br />

            <h2>角色定位</h2>

            <p style={{ textAlign: "center" }}>
              <br />
              <br />
              {`我負責【全面整合、後端串接】，`}
              <br />
              <br />
              {`例如: 某些人的code難以整合，`}
              <br />
              <br />
              {`有些地方邏輯設計得比較奇怪、`}
              <br />
              <br />
              {`就由我來撰寫另一份資料庫模型，`}
              <br />
              <br />
              {`過程也盡量保留大家作品原貌，`}
              <br />
              <br />
              {`不去破壞別人的成果。`}
              <br />
              <br />
              <br />
              <br />
              {`除了後端，前端也會適時幫忙，`}
              <br />
              <br />
              {`另外主要負責綠界物流的邏輯，`}
              <br />
              <br />
              {`雖然無法註冊，但是模擬的過程，`}
              <br />
              <br />
              {`還是可以順利呈現，只要透過ngrok，`}
              <br />
              <br />
              {`給予加密通道，讓作品成功連上網路，`}
              <br />
              <br />
              {`就可以順利溝通綠界。`}
              <br />
              <br /> <br />
              <br />
              {`另外也使用Oauth2.0，而非JavaMail，`}
              <br />
              <br />
              {`使GoogleAPI能夠為我所用，加入小彩蛋。`}
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
                  src="/ISpan/images/Oshop1.png"
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
                  src="/ISpan/images/Oshop2.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <h2>操作</h2>
            <p style={{ textAlign: "center" }}>{`【Web環境】`}</p>
            <p style={{ textAlign: "center" }}>
              <br />
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
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=vmX8GgIa23A"
                  >
                    OShop期末專案
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
