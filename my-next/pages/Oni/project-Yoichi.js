import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import style from "../../styles/Home.module.css";
import Image from "next/image";

import React, { useCallback, useState, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const YoichiApp = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  useEffect(() => {
    // 因為 ControlledZoom 替我製作多了一層div 所以要在渲染完畢後製作置中功能!
    // 在這裡進行元素選取和樣式修改
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      let imgParent = img.parentElement;
      imgParent.style.display = "flex";
      imgParent.style.justifyContent = "center";
      imgParent.style.alignItems = "center";
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
            <p>
              阿姨在夜市賣小吃，每次有去幫忙的時候，發現很多客人點餐時，點餐+計價、很容易混亂。
            </p>
            <p>
              {`有時候點餐的樣式很不同，有3、有2，各種不同組合，客人還會走來走去，
                時不時就可能出現混亂，有時候幫手可能就計算出不同價格，也真的多收錢，
                諸如此類都會降低再度來訪的可能，為了方便作業，就幫她做一個網頁。`}
              <br />
            </p>
            <h2>設計</h2>
            <p>
              {`儲存的地方選擇localStorage，因為方便、不須額外連線成本，
              設置靜態網頁，很快就回應，因為Render靜態網頁不會降速，
              另外也特別用 lz-string ，作為localStorage的壓縮工具，
              避免檔案快速龐大，大約可以有半年左右的紀錄，之後再覆蓋或者同步即可，
              因為是小本生意，最重要是紀錄、計價、顯示。`}
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
              {`先到【功能編輯】去增加商品，透過旁邊藍色按鈕增加，
            之後可以切換到工作區，裡面可以直接點選數量。
            `}
            </p>
            <p style={{ textAlign: "center" }}>
              {`ex : 2點取兩次，數量會變成4。
            `}
            </p>
            <p style={{ textAlign: "center" }}>
              {` 已付的訂單無法修改，只能做廢，避免亂掉。
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
                  <a target="_blank" href="https://youtu.be/1lrZnBvX0ho">
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
