import { useMediaQuery } from "react-responsive";

const useTabletOrMobile = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return {
    isTabletOrMobile,
  };
};

export default useTabletOrMobile;
