import Lottie from "lottie-react";
import { PropsWithChildren } from "react";
import LoadingAnimation from "src/assets/animations/Loading.json";

import FloatingSheet, { FloatingSheetWrapper } from "./FloatingSheet";

const FloatingSheetLoading = ({ children }: PropsWithChildren) => {
  return (
    <FloatingSheetWrapper>
      <FloatingSheet>
        <Lottie
          loop
          animationData={LoadingAnimation}
          style={{
            width: "70px",
            height: "70px",
          }}
        />
        {children}
      </FloatingSheet>
    </FloatingSheetWrapper>
  );
};

export default FloatingSheetLoading;
