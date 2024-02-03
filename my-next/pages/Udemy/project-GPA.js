import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const GPA = () => {
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
            <h1 style={{ textAlign: "center" }}>GPA計算機</h1>
            <br />
            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              target="_blank"
              href="https://portfolio-104l.onrender.com/project4/index"
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
            <h2>GPA Web</h2>
            <p style={{ textAlign: "center" }}>
              {`計算GPA的網頁，將JS融入專案練習，`}
              <br />
              <br />
              {`透過JS達到動態生成、animation追加`}
            </p>
            <br />
            <br />
            <h2>設計</h2>
            <p style={{ textAlign: "center" }}>
              {`比較特別之處是開場做了一個動畫效果，`}
              <br />
              <br />
              {`以及增加或刪除資料的小動態感。`}
              <br />
              <br />
              {`( 排序則使用mergeSort )`}
            </p>
            <p style={{ textAlign: "center" }}></p>
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
                  src="/Udemy/images/GPA.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <br />
            <h2>操作方式</h2>
            <p style={{ textAlign: "center" }}>
              {`class category可不填`}
              <br /> <br />
              {`class number可不填`}
              <br /> <br />
              {`填credit 0~6 以及 A~F即可 `}
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
                    href="https://github.com/odenmeow/UdemyFullStack/tree/master/Project4_%E6%88%90%E7%B8%BE%E8%A8%88%E7%AE%97%E7%B6%B2%E7%AB%99"
                  >
                    Compute GPA
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

export default GPA;
