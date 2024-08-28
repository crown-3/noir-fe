import { forwardRef } from "react";
import styled, { css } from "styled-components";

type ListItemPositionType = "first" | "middle" | "last" | "single";

interface StyledInputProps {
  $position: ListItemPositionType;
}

interface InputProps extends React.ComponentProps<"input">, StyledInputProps {}

const Input = forwardRef(
  (
    { $position, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <Wrapper $position={$position}>
        <StyledInput $position={$position} ref={ref} {...rest} />
      </Wrapper>
    );
  },
);

const Wrapper = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  padding-left: 16px;
  overflow: hidden;

  ${({ $position }) => {
    switch ($position) {
      case "first":
        return css`
          border-radius: 10px 0 0 10px;
        `;
      case "last":
        return css`
          border-radius: 0 10px 10px 0;
        `;
      case "middle":
        return css`
          border-radius: 0;
        `;
      case "single":
        return css`
          border-radius: 10px;
        `;
    }
  }}
`;

const StyledInput = styled.input<StyledInputProps>`
  flex-grow: 1;
  border: none;
  outline: none;

  padding: 11px 16px 11px 0;

  border-radius: 10px;
  background-color: ${(p) => p.theme.bg.primary};

  ${({ $position, ...p }) => {
    switch ($position) {
      case "first":
      case "middle":
        return css`
          border-bottom: 0.333px solid ${p.theme.separators.non_opaque};
        `;
    }
  }}
`;

Input.displayName = "Input";
