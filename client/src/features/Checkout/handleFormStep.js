export function handleFormStep(step, setStep) {
  return () => {
    if (step <= 3) {
      setStep((step) => step + 1);
    }
  };
}
