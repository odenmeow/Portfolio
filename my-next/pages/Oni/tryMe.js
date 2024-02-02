import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
const MyComponent = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  // 自動帶入，類似arrowFunction，但是useCallback跟useEffect類似，都是為了節省資源而設計的React元件
  const handleZoomChange = useCallback((shouldZoom) => {
    console.log(shouldZoom);
    setIsZoomed(shouldZoom);
  }, []);

  const handleImageClick = () => {
    // 點選圖片時進行放大
    console.log("shouldZoom");
    setIsZoomed(true);

    let btn = document.querySelector(".zoom-btn button");
    console.log(btn);
    btn.addEventListener("click", (e) => {
      console.log("設定為false");
      setIsZoomed(false);
    });
  };

  const handleZoomButtonClick = () => {
    // 實現自定義的縮小邏輯，這裡只是簡單的設定為縮小
    setIsZoomed(false);
  };

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
      {isZoomed && (
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
      )}
    </div>
  );
};

export default MyComponent;
