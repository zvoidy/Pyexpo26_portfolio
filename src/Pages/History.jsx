import React from "react";
import InstaCard from "../Components/InstaCard";

const History = () => {
  return (
    <div className="history-container" id="Speakers">
      <h1 className="history-title">Instagram wall of Frames</h1>
      <div className="history-content">
        <InstaCard instaLogo={"https://picsum.photos/100/100"} instaName={"Zvoidy_"} mainImg={"https://picsum.photos/300/400"} likes={100} desc={'First round of evaluation is live at Hack2Expo!...'} date={"Febrary 12, 2025"}/>
        <InstaCard instaLogo={"https://picsum.photos/100/100"} instaName={"Zvoidy_"} mainImg={"https://picsum.photos/300/400"} likes={100} desc={'First round of evaluation is live at Hack2Expo!...'} date={"Febrary 12, 2025"}/>
        <InstaCard instaLogo={"https://picsum.photos/100/100"} instaName={"Zvoidy_"} mainImg={"https://picsum.photos/300/400"} likes={100} desc={'First round of evaluation is live at Hack2Expo!...'} date={"Febrary 12, 2025"}/>
        <InstaCard instaLogo={"https://picsum.photos/100/100"} instaName={"Zvoidy_"} mainImg={"https://picsum.photos/300/400"} likes={100} desc={'First round of evaluation is live at Hack2Expo!...'} date={"Febrary 12, 2025"}/>
        <InstaCard instaLogo={"https://picsum.photos/100/100"} instaName={"Zvoidy_"} mainImg={"https://picsum.photos/300/400"} likes={100} desc={'First round of evaluation is live at Hack2Expo!...'} date={"Febrary 12, 2025"}/>
      </div>

      <div>
             </div>
    </div>
  );
};

export default History;
