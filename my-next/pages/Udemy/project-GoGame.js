import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const GoGame = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <Layout>
      <div>
        {/* Add your custom 404 content here */}
        <section className={style["main-area"]}>
          <div style={{ position: "relative" }} className={style.info}>
            <h1 style={{ textAlign: "center" }}>圍棋網站</h1>
            <br />
            <h3 style={{ textAlign: "center" }}>學後應用HTML+CSS</h3>

            <a
              className={style.stopBubble}
              style={{ position: "relative", left: "16px" }}
              href="https://portfolio-104l.onrender.com/project1/index"
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
            <h2> (Udmey Project1)</h2>
            <p style={{ textAlign: "center" }}>
              {`上課上得差不多後，開始跟著製作第一個課堂專案，將所學應用。`}{" "}
              <br />
              <br />
              {`沒有太多問題，基本上就呈現畫面與切畫面的應用`}
            </p>

            <div className={style["blog-img-container"]}>
              <ControlledZoom
                isZoomed={isZoomed}
                onZoomChange={handleZoomChange}
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    transform: "translate(50%,0)",
                    width: "50%",
                    height: "auto",
                  }}
                  alt="me"
                  src="/Udemy/images/GoGame.png"
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
                    href="https://github.com/odenmeow/UdemyFullStack/tree/master/Project1_%E5%9C%8D%E6%A3%8B%E7%B6%B2%E7%AB%99"
                  >
                    Project1_圍棋
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

export default GoGame;
