import React, { useState } from "react";
import Banner from "./Banner";
import SwitchBanner from "./SwitchBanner";

const MainBanner = ({ switchBanner, setswitchBanner, switchBannerId }) => {
  if (switchBanner) {
    return <SwitchBanner setswitchBanner={setswitchBanner} switchBannerId={switchBannerId} />;
  } else {
    return <Banner />;
  }
};

export default MainBanner;