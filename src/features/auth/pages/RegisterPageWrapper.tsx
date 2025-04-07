import { useState } from "react";
import RegisterPage from "./RegisterPage";

const RegisterPageWrapper = () => {
  const [step, setStep] = useState(0);

  const context = {
    onBack: step === 1 ? () => setStep(0) : undefined,
  };

  return (
    <RegisterPage step={step} setStep={setStep} context={context} />
  );
};

export default RegisterPageWrapper;