import React, { useCallback, useEffect, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap CSS
import Alert from "react-bootstrap/Alert";
const MyComponent = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  // 自動帶入，類似arrowFunction，但是useCallback跟useEffect類似，都是為了節省資源而設計的React元件
  const handleZoomChange = useCallback((shouldZoom) => {
    console.log(shouldZoom);
    setIsZoomed(shouldZoom);

    //   if (shouldZoom == true) {
    //     console.log("確定");
    //     let div = document.querySelector(".zoom-btn>div:nth-child(2)");
    //     // 設置 div 的樣式
    //     div.style.position = "fixed";
    //     div.style.top = "0";
    //     div.style.left = "0";
    //     div.style.width = "100%";
    //     div.style.height = "100%";
    //     div.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; /* 半透明的黑色覆蓋 */
    //     div.style.pointerEvents =
    //       "auto"; /* 防止事件穿透，div 上的事件將在這裡處理 */
    //   }
  }, []);

  // .overlay {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色覆蓋 */
  //   pointer-events: auto; /* 防止事件穿透，div 上的事件將在這裡處理 */
  // }
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

  // const handleZoomButtonClick = () => {
  //   // 實現自定義的縮小邏輯，這裡只是簡單的設定為縮小
  //   setIsZoomed(false);
  // };

  return (
    <div>
      {/* 點選圖片進行放大 */}

      <ControlledZoom
        isZoomed={isZoomed}
        // onZoomChange={handleZoomChange}
        classDialog={"zoom-btn"}
      >
        <Image
          alt="That wanaka tree, alone in the water near mountains"
          src="/Oni/images/relay_wire.png"
          width="150"
          height={300}
          onClick={() => {
            console.log("我被按了");
            handleImageClick();
          }}
        />
      </ControlledZoom>
      {/* {isZoomed && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            cursor: "pointer",
          }}
          onClick={handleZoomButtonClick}
        >
          <img
            style={{ width: "48", height: "48" }}
            src="/project3/images/ICONS/icons8-nextjs.svg"
            alt="next"
          />
          <span>X</span>
        </div>
      )} */}
    </div>
  );
};

export default MyComponent;
