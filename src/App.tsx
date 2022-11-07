import styles from "./components/style/app.module.scss";
import Footer from "./components/common/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/common/header/Header";

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
