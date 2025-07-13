const useAppConstants = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const employeeCountOptions = [
    {
      label: "1+",
      value: 1,
    },
    {
      label: "10+",
      value: 10,
    },
  ];

  return {
    containerVariants,
    employeeCountOptions,
  };
};

export default useAppConstants;
