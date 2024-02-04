import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const OniNote = () => {
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
            <h1 style={{ textAlign: "center" }}>筆記</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>MarkText</h3> <br />
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
              {`從Udemy開始，試圖做筆記，`}
              <br />
              <br />
              {`找上了GitHub常用的 .md格式，`}
              <br />
              <br />
              {`雖然並非盡善盡美，但可隨時打包，`}
              <br />
              <br />
              {`不被單一網站綁架的感覺，不錯，`}
              <br />
              <br />
              {`紀錄了我上課所有內容的筆記，`}
              <br />
              <br />
              {`除此之外，也被我拿來記錄英文。`}
              <br />
              <br />
              <br />
              <br />
              {`我把筆記上傳到Git，並且圖片也有，`}
              <br />
              <br />
              {`使用相對路徑，就能讓筆記也上雲端，`}
              <br />
              <br />
              {`只可惜MarkText，偶爾會有bug，`}
              <br />
              <br />
              {`開始工作的話可能要考慮付費買`}
              <br />
              <br />
              {`typora，也許會比較穩定 ?`}
              <br />
            </p>
            <br />

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
                  src="/Oni/images/oniNote1.png"
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
                  src="/Oni/images/oniNote2.png"
                  layout="fill"
                  priority={true}
                />
              </ControlledZoom>
            </div>
            <h2>操作</h2>
            <p
              style={{ textAlign: "center" }}
            >{`【GitHub在線閱讀、本地電腦撰寫】`}</p>
            <p style={{ textAlign: "center" }}>
              {`隨便打開一個.md就能在線閱讀`}
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
                  src="/project3/images/ICONS/icons8-github.svg"
                  layout="fill"
                />
              </div>
              <div className={style["blog-img"]}>
                {/* <h2 style={{ display: "inline-block", margin: "5px" }}>連結</h2> */}
                <p style={{ margin: "0", textAlign: "center" }}>
                  <a
                    target="_blank"
                    href="https://github.com/odenmeow/PB-note/tree/master/Udemy"
                  >
                    筆記
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

export default OniNote;
