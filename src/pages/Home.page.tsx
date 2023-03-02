import BannerContainer from "@/containers/Banner";
import CheckerContainer from "@/containers/Checker";
import HistoryContainer from "@/containers/History";

function MainPage() {
  return (
    <div id="main-page" className="text-center">
      <BannerContainer />
      <span>Check the validity of your phone number</span>
      <CheckerContainer />
      <HistoryContainer limit={3} />
    </div>
  );
}

export default MainPage;
