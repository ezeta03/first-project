import "../assets/sass/main.scss";
import Header from "./components/LargeComponents/Header";
import Inicio from "./components/LargeComponents/Inicio";
import Footer from "./components/LargeComponents/Footer";
import { Navigate, Route, Routes } from "react-router-dom";

import EncuestaSatisfaccion from "./components/LargeComponents/EncuestaSatisfaccion";
import EncuestaComercial from "./components/LargeComponents/EncuestaComercial";
import styles from "../assets/sass/modules/Inicio.module.scss";

import Loader from "./components/LargeComponents/Loader";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <div className={styles.main}>
        <Loader>
          <Assistant />
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/abonados-y-usuarios"
              element={<AbonadosYUsuarios />}
            />
            <Route
              path="/encuesta-de-satisfaccion"
              element={<EncuestaSatisfaccion />}
            />
            <Route path="/encuesta-comercial" element={<EncuestaComercial />} />
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
          <Footer />
          <Toaster
            position='bottom-left'
            dir='auto'
            visibleToasts={1}
            duration={3000}
            closeButton
            richColors
            important
            unstyled={true}
            toastOptions={
              {
                className: styles.myFirstCustomToast,
              }
            }
          />
        </Loader>
      </div>
    </>
  );
}

export default App;
