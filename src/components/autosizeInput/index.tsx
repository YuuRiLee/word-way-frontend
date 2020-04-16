import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import useAutosizeInput from '../../hooks/useAutosizeInput';
export interface AutosizeInputProps {
    type: 'text';
    maxLength: number;
    minWidth: number;
    placeholderIsMinWidth: boolean;
    className?: string;
    placeholder?: string;
    extraWidth?: any;
    disabled?: boolean;
    label?: string;
    color?: string;
    onChange: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
}
const BaseInput = (props: AutosizeInputProps): React.ReactElement<AutosizeInputProps> => {
    const {
        className,
        placeholder,
        minWidth,
        placeholderIsMinWidth,
        extraWidth,
        onChange,
        ...other
    } = props;
    const { AutosizeInputState, onChangeValue, onChangeWidth } = useAutosizeInput();
    let sizerEle: any;
    let placeHolderSizer: any;
    let newInputWidth: number;

    const resizeInput = (e: any) => {
        onChange(e);
        if (!sizerEle || typeof sizerEle.scrollWidth === 'undefined') {
            return;
        }
        const changeValue = e.target.value;
        onChangeValue({
            value: changeValue,
        });
    };

    const updateInputWidth = () => {
        if (placeholder && (!AutosizeInputState.value || (AutosizeInputState.value && placeholderIsMinWidth))) {
            newInputWidth = Math.max(sizerEle.scrollWidth, placeHolderSizer.scrollWidth) + 2;
        } else {
            newInputWidth = sizerEle.scrollWidth + 2;
        }
        if (newInputWidth <= minWidth) {
            newInputWidth = minWidth;
        }
        onChangeWidth({
            inputWidth: newInputWidth,
        });
    };

    useEffect(() => updateInputWidth(), [AutosizeInputState.value]);

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
    const dynamicStyle = {
        width: `${AutosizeInputState.inputWidth}px`,
    };

    return (
        <div className={className}>
            <input
                onChange={(e) => resizeInput(e)}
                style={dynamicStyle}
                value={AutosizeInputState.value}
                placeholder={placeholder}
                {...other}
                autoFocus
            />
            <HiddenText ref={(ref) => { sizerEle = ref; }}>
                {AutosizeInputState.value}
            </HiddenText>
            {
                placeholder
                && (
                    <HiddenText ref={(ref) => { placeHolderSizer = ref; }}>
                        {placeholder}
                    </HiddenText>
                )
            }
        </div>
    );
};

const AutosizeInput = styled(BaseInput)((props) => {
    const { color } = props;
    const StyleButton = css`
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
            color: ${color};
            caret-color: ${color};
            outline: none;
            background: transparent;
        }
  `;

    return StyleButton;
});

BaseInput.defaultProps = {
    color: 'black',
    type: 'text',
    minWidth: 1,
    maxLength: 17,
    placeholderIsMinWidth: false,
    onChange: () => { },
};

export default AutosizeInput;
