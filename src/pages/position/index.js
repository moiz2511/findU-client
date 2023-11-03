import Curriculam from "@/components/positionpage/Curriculam";
import Level from "@/components/positionpage/Level";
import Position from "@/components/positionpage/Position";
import { useState } from "react";
import { useStepActions } from "../../../zustand/store";

const PositionPage = () => {
  const actions = useStepActions();

  const [step, setStep] = useState(1);

  const handleContinue = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  return (
    <>
      {step === 1 && (
        <Position
          onContinue={handleContinue}
          onBack={handleBack}
          actions={actions}
        />
      )}
      {step === 2 && (
        <Curriculam

          onContinue={handleContinue}
          onBack={handleBack}
          actions={actions}
        />
      )}
      {step === 3 && (
        <Level
          onContinue={handleContinue}
          onBack={handleBack}
          actions={actions}
        />
      )}
    </>
  );
};
export default PositionPage;
