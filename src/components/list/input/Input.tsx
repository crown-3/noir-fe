import { forwardRef } from "react";
import styled, { css } from "styled-components";

type ListItemPositionType = "first" | "middle" | "last" | "single";

interface StyledInputProps {
  $position: ListItemPositionType;
}

interface IsGroupedProps {
  $isGrouped?: boolean;
}

interface InputProps
  extends React.ComponentProps<"input">,
    StyledInputProps,
    IsGroupedProps {}

const ListInput = forwardRef(
  (
    { $position, $isGrouped = true, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <GroupedWrapper $isGrouped={$isGrouped}>
        <Wrapper $position={$position}>
          <StyledInput $position={$position} ref={ref} {...rest} />
        </Wrapper>
      </GroupedWrapper>
    );
  },
);

const GroupedWrapper = styled.div<IsGroupedProps>`
  width: 100%;
  padding: ${(p) => p.$isGrouped && "0 16px"};
`;

const Wrapper = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  padding-left: 16px;
  overflow: hidden;
  background-color: ${(p) => p.theme.bg.secondary};

  ${({ $position }) => {
    switch ($position) {
      case "first":
        return css`
          border-radius: 10px 10px 0 0;
        `;
      case "last":
        return css`
          border-radius: 0 0 10px 10px;
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

  background-color: ${(p) => p.theme.bg.secondary};

  ${({ $position, ...p }) => {
    switch ($position) {
      case "first":
      case "middle":
        return css`
          border-bottom: 0.333px solid ${p.theme.separators.non_opaque};
        `;
    }
  }}

  ::placeholder {
    color: ${(p) => p.theme.labels.tertiary};
  }
  color: ${(p) => p.theme.labels.primary};
`;

ListInput.displayName = "Input";

export default ListInput;
