import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const YoichiApp = () => {
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
            <h1 style={{ textAlign: "center" }}>夜市APP</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>Designed for tablet</h3> <br />
            <h5 style={{ textAlign: "center" }}>建議使用平板或電腦</h5>
            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              target="_blank"
              href="https://portfolio-104l.onrender.com/yoichi/index"
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
            <h2>緣起</h2>
            <p style={{ textAlign: "center" }}>
              {`我的阿姨在夜市賣燒烤，偶爾去幫忙時，`}
              <br />
              <br />
              {`發現客人一多，點餐、計價，很容易混亂。`}
              <br />
              <br />
              {`有時候點餐的樣式很不同，有3、有2，`}
              <br />
              <br />
              {`各種不同組合，客人還會走來走去，`}
              <br />
              <br />
              {`時不時就可能出現混亂，`}
              <br />
              <br />
              {`有時可能就計算出不同價格，`}
              <br />
              <br />
              {`多收錢，諸如此類會降低再度來訪可能，`}
              <br />
              <br />
              {`於是為了方便作業，就幫她做一個網頁。`}
              <br />
              <br />
            </p>

            <h2>設計</h2>
            <p style={{ textAlign: "center" }}>
              {`儲存選localStorage，因為方便、`}
              <br />
              <br />
              {`不須額外連線成本，設置靜態網頁，`}
              <br />
              <br />
              {`很快就能回應，Render靜態網頁不降速。`}
              <br />
              <br />
              {`另外也特別用 lz-string ，`}
              <br />
              <br />
              {`作為localStorage的壓縮工具，`}
              <br />
              <br />
              {`避免資料快速龐大，能存半年左右的紀錄，`}
              <br />
              <br />
              {`之後再覆蓋或者同步即可，`}
              <br />
              <br />
              {`小本生意，最重要是，`}
              <br />
              <br />
              {`紀錄、計價、顯示。`}
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
                    width: "50%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/Oni/images/functionEdit.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <h2>操作方式</h2>
            <p style={{ textAlign: "center" }}>
              {` 【專為平板設計】
            `}
            </p>
            <p style={{ textAlign: "center" }}>
              {`先到【功能編輯】去增加商品，`}
              <br />
              <br />
              {`透過旁邊藍色按鈕增加， `}
              <br />
              <br />
              {`之後切換到工作區，`}
              <br />
              <br />
              {`可以直接點選數量。`}
              <br />
              <br />
              {`ex : 2點取兩次，數量會變成4。`}
              <br />
              <br />
              {` 已付訂單無法修改，只能做廢，避免亂掉。`}
            </p>
            <br />
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
                  <a target="_blank" href="https://youtu.be/MsZpgobP2u0">
                    實機影片
                  </a>
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
                  <a target="_blank" href="https://github.com/odenmeow/Yoichi">
                    Yoichi
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

export default YoichiApp;
