import styles from "./sharedstyles/app.module.scss";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
