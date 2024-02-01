import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
const MyComponent = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <Image
          alt="That wanaka tree, alone in the water near mountains"
          src="/Oni/images/relay_wire.png"
          width="150"
          height={300}
        />
      </ControlledZoom>
    </div>
  );
};

export default MyComponent;
