import React, { useState, useEffect } from "react";
import "./backgroundSlideshow.css";

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images - using some of the book covers
  const backgroundImages = [
    "https://z-cdn-media.chatglm.cn/files/5be361e8-c683-468c-a1a1-1554188c4a1f_pasted_image_1756575389678.png?auth_key=1788112062-90ae05c62c56426790fcbaa6d291435e-0-16d4c04307fc53268018bf1585ccb7b2",
    "https://z-cdn-media.chatglm.cn/files/a9b7eb9a-2f65-4740-b31d-36add0957892_pasted_image_1756575431407.png?auth_key=1788112062-dd83efdc3c9e4af3aa812aab7d5c1e0e-0-334928e066f05c703c4739bea61365aa",
    "https://z-cdn-media.chatglm.cn/files/2f8ae13b-d8bd-47e0-ab08-f19ec2b2f44e_pasted_image_1756575527427.png?auth_key=1788112062-9b4cfc187d8648278abdec8f55490673-0-72024c129c454cc1b537adcd545bba1d",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="background-slideshow">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="background-slide"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
      <div className="background-overlay"></div>
    </div>
  );
};

export default BackgroundSlideshow;
