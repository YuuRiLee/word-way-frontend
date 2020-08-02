import React, { useEffect, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import useAutosizeInput from '../../../hooks/useAutosizeInput';
export interface AutosizeInputProps {
  type: 'text';
  maxLength: number;
  minWidth: number;
  className?: string;
  placeholder?: string;
  label?: string;
  color?: string;
  autoFocus: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const AutosizeInput = (props: AutosizeInputProps): React.ReactElement<AutosizeInputProps> => {
  const { className, placeholder, minWidth, onChange, ...other } = props;
  const { AutosizeInputState, onChangeValue, onChangeWidth } = useAutosizeInput();
  let sizerEle: HTMLSpanElement | null;
  let placeHolderSizer: HTMLSpanElement | null;

  const resizeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!sizerEle || typeof sizerEle.scrollWidth === 'undefined') {
      return;
    }
    const changeValue = e.target.value;
    onChangeValue(changeValue);
  };

  useEffect(() => {
    let newInputWidth: number;
    if (!sizerEle) {
      return;
    } else if (placeHolderSizer && !AutosizeInputState.value) {
      newInputWidth = Math.max(sizerEle.scrollWidth, placeHolderSizer.scrollWidth) + 2;
    } else {
      newInputWidth = sizerEle.scrollWidth + 2;
    }
    if (newInputWidth <= minWidth) {
      newInputWidth = minWidth;
    }
    onChangeWidth(newInputWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AutosizeInputState.value]);

  const dynamicStyle = {
    width: `${AutosizeInputState.inputWidth}px`,
  };

  return (
    <div className={className}>
      <input
        onChange={(e) => {
          onChange(e);
          resizeInput(e);
        }}
        style={dynamicStyle}
        value={AutosizeInputState.value}
        placeholder={placeholder}
        {...other}
      />
      <HiddenText
        ref={(ref) => {
          sizerEle = ref;
        }}
      >
        {AutosizeInputState.value}
      </HiddenText>
      {placeholder && (
        <HiddenText
          ref={(ref) => {
            placeHolderSizer = ref;
          }}
        >
          {placeholder}
        </HiddenText>
      )}
    </div>
  );
};

const HiddenText = styled.span`
  position: absolute;
  overflow: scroll;
  white-space: pre;
  letter-spacing: -0.9px;
  font-weight: 500;
  font-size: 1.1em;
  white-space: pre;
  display: block;
  visibility: hidden;
`;

const StyledAutosizeInput = styled(AutosizeInput)`
  display: inline-block;
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  input {
    box-sizing: content-box;
    white-space: pre;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;
    border: none;
    ${({ color }) => css`
      color: ${color};
      caret-color: ${color};
    `}
    outline: none;
    background: transparent;
  }
`;

AutosizeInput.defaultProps = {
  color: 'black',
  type: 'text',
  minWidth: 1,
  maxLength: 17,
  autoFocus: true,
  onChange: () => {},
};

export default StyledAutosizeInput;
