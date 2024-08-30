import styled, { keyframes } from "styled-components";

interface FloatingSheetProps {
  children: React.ReactNode;
}

const FloatingSheet = ({ children }: FloatingSheetProps) => {
  return <Sheet>{children}</Sheet>;
};

export const OnBoardingAnimation = keyframes`
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

export const Sheet = styled.div`
  animation: ${OnBoardingAnimation} 0.2s cubic-bezier(0.13, 0.66, 0.18, 0.99);

  background: ${(p) => p.theme.materials.regular};
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);

  border-radius: 20px;
  padding: 20px;
  transition: 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FloatingSheetWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FloatingSheet;
