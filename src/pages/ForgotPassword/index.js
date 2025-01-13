import LumFormValidateUserCode from "components/organisms/LumFormValidateUserCode";
import LumFormForgotPassword from "components/organisms/LumFormForgotPassword";
import LumFormResetPassword from "components/organisms/LumFormResetPassword";
import InicialTemplate from "components/templates/InitialTemplate";
import { useState } from "react";

const ForgotPassword = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        code: "",
    });

    const nextStep = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data,
        }));
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const steps = [
        <LumFormForgotPassword formData={formData} onNext={nextStep} />,
        <LumFormValidateUserCode formData={formData} onBack={prevStep} onNext={nextStep} />,
        <LumFormResetPassword formData={formData} onBack={prevStep} />
    ];

    return <InicialTemplate>{steps[currentStep]}</InicialTemplate>;
};

export default ForgotPassword;