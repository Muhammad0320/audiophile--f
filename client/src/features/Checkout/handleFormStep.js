export function handleFormStep(reset, step, setStep) {
  return () => {
    reset();

    if (step <= 3) {
      setStep((step) => step + 1);
    }
  };
}
