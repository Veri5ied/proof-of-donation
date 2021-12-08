import LoadingIcon from "../../assets/images/logo.png";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img src={LoadingIcon} alt="loading...." />
    </div>
  );
}

export default Loading;
