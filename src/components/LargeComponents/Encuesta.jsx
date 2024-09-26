import { useState } from "react";
import styles from "../../../assets/sass/modules/EncuestaSatisfaccion.main.module.scss";
import EncuestaWebsite from "../SmallComponents/EncuestaWebsite";
import EncuestaSatisfaccionHero from "../SmallComponents/EncuestaSatisfaccion.Hero";
import StepCounter from "../SmallComponents/StepCounter";
import WeCanHelpYou from "../SmallComponents/weCanHelpYou";

const EncuestaSatisfaccion = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(1);


  const nextStep = () => {
    if (step <= 3) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <EncuestaSatisfaccionHero />
      <main className={styles.main}>
        <section className={styles.encuestaSatisfaccion}>
          <StepCounter currentStep={step} totalSteps={3} />
          <div className={styles.formContainer}>
            {
              step === 1 && <EncuestaWebsite />
            }
          </div>
          <WeCanHelpYou />
        </section>
      </main>
    </>
  );
};

export default EncuestaSatisfaccion;
