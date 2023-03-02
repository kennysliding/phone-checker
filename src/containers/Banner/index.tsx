import Lottie from "lottie-react";

import phoneAnimation from "@/assets/phone.json";

function BannerContainer() {
  return (
    <div className="w-1/6 mx-auto mb-10">
      <Lottie animationData={phoneAnimation} />
    </div>
  );
}

export default BannerContainer;
