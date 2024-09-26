import { useEffect, useRef } from "react";
import styles from "../../../assets/sass/modules/smallComponents/EncuestaComercialStep2.module.scss";
import { EncuestaButtonsNavigation } from "../LargeComponents/EncuestaButtonsNavigation";
import EncuestaImgStep2 from '../../../assets/images/encuestaImg2.svg'
import FormImageContainer from "./FormImageContainer";

const EncuestaComercialStep2 = ({ step, prevStep, nextStep, data, setData }) => {
  const formRef = useRef(null);

  return (
    <>
      <div className={styles.step2Container}>
        <div className={styles.instructions}>
          <section className={styles.topSection}>Instrucciones</section>
          <section className={styles.midSection}>Por favor, califica tu satisfacción con la atención recibida del ejecutivo corporativo en una escala del 1 al 5, donde:</section>
          <section className={styles.instructionsOptions}>
            <div className={styles.instructionOption}>
              <div className={styles.number}>1</div>
              <div className={styles.mean}>Muy insatisfecho</div>
            </div>
            <div className={styles.instructionOption}>
              <div className={styles.number}>2</div>
              <div className={styles.mean}>Insatisfecho</div>
            </div>
            <div className={styles.instructionOption}>
              <div className={styles.number}>3</div>
              <div className={styles.mean}>Neutral</div>
            </div>
            <div className={styles.instructionOption}>
              <div className={styles.number}>4</div>
              <div className={styles.mean}>Satisfecho</div>
            </div>
            <div className={styles.instructionOption}>
              <div className={styles.number}>5</div>
              <div className={styles.mean}>Muy Satisfecho</div>
            </div>
          </section>
        </div>
        <form className={styles.formStep2} ref={formRef}>
          <h3>Atención del ejecutivo corporativo</h3>
          <div className={styles.question}>
            ¿En qué medida el ejecutivo corporativo mostró conocimiento y comprensión de tus necesidades?
            <div className={styles.options}>
              {[1, 2, 3, 4, 5].map((optionValue) => (
                <label key={optionValue} className="option" htmlFor={`alternative1${optionValue}`}>
                  <input
                    type="radio"
                    name="question1"
                    id={`alternative1${optionValue}`}
                    value={optionValue}
                    required
                    defaultChecked={data && parseInt(data.question1) === optionValue}
                  />
                  <span>{optionValue}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.question}>
            ¿Cuál fue tu nivel de satisfacción con el tiempo de respuesta del ejecutivo corporativo?
            <div className={styles.options}>
              {[1, 2, 3, 4, 5].map((optionValue) => (
                <label key={optionValue} className="option" htmlFor={`alternative2${optionValue}`}>
                  <input
                    type="radio"
                    name="question2"
                    id={`alternative2${optionValue}`}
                    value={optionValue}
                    required
                    defaultChecked={data && parseInt(data.question2) === optionValue}
                  />
                  <span>{optionValue}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.question}>
            Comunicación y Explicación del ejecutivo corporativo:
            <div className={styles.options}>
              {[1, 2, 3, 4, 5].map((optionValue) => (
                <label key={optionValue} className="option" htmlFor={`alternative3${optionValue}`}>
                  <input
                    type="radio"
                    name="question3"
                    id={`alternative3${optionValue}`}
                    value={optionValue}
                    required
                    defaultChecked={data && parseInt(data.question3) === optionValue}
                  />
                  <span>{optionValue}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.question}>
            ¿Cómo evalúas la claridad de la información brindada por el ejecutivo corporativo?
            <div className={styles.options}>
              {[1, 2, 3, 4, 5].map((optionValue) => (
                <label key={optionValue} className="option" htmlFor={`alternative4${optionValue}`}>
                  <input
                    type="radio"
                    name="question4"
                    id={`alternative4${optionValue}`}
                    value={optionValue}
                    required
                    defaultChecked={data && parseInt(data.question4) === optionValue}
                  />
                  <span>{optionValue}</span>
                </label>
              ))}
            </div>
          </div>
          <EncuestaButtonsNavigation currentStep={step} totalSteps={3} prevStep={prevStep} nextStep={nextStep} formRef={formRef} data={data} setData={setData} />
        </form>
      </div>
      <FormImageContainer image={EncuestaImgStep2} />
    </>
  );
};

export default EncuestaComercialStep2;
