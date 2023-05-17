import MediaAssets from "assets";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles["container"]}>
      <img src={MediaAssets.ic_page_not_found} alt="" />
      <h1>404 ERROR</h1>
      <h2>The requested page is not found</h2>
    </div>
  );
};

export default PageNotFound;
