import React from 'react';
import styled, { css } from 'styled-components';
import useAutosizeInput from '../../hooks/useAutosizeInput';

export interface InputProps {
    disabled: boolean;
    label: string;
    color: string;
    type: 'text';
    className: string;
    placeholder?: string;
    minWidth: number;
    placeholderIsMinWidth: boolean;
    extraWidth?: any;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    ref?: any;
}
const BaseInput = (props: InputProps): React.ReactElement<InputProps> => {
    const {
        disabled,
        className,
        color,
        placeholder,
        minWidth,
        placeholderIsMinWidth,
        extraWidth,
        onBlur,
        onKeyDown,
        ...inputProps
    } = props;
    const { AutosizeInputState, onChangeValue, onChangeWidth } = useAutosizeInput();
    let sizerEle: any;
    let inputEle: any;
    let placeHolderSizer: any;
    let newInputWidth = 0;

    const resizeInput = (e: any) => {
        if (!sizerEle || typeof sizerEle.scrollWidth === 'undefined') {
            return;
        }
        onChangeValue({
            value: e,
            inputWidth: sizerEle.scrollWidth,
            el: sizerEle,
        });
        if (placeholder && (!AutosizeInputState.value || (AutosizeInputState.value && placeholderIsMinWidth))) {
            newInputWidth = Math.max(sizerEle.scrollWidth, placeHolderSizer.scrollWidth) + 20;
        } else {
            newInputWidth = sizerEle.scrollWidth + 20; // font size로 계산 1.1em -> 19px
        }

        newInputWidth += 0;
        if (newInputWidth <= minWidth) {
            newInputWidth = minWidth;
        }

        onChangeWidth({
            inputWidth: newInputWidth,
            el: e,
        });
    };

    const dynamicStyle = {
        width: `${AutosizeInputState.inputWidth}px`,
    };

    const CuSpan = styled.span`
    position: absolute;
    overflow: scroll;
    white-space: pre;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;
    white-space: pre;
    display: block;
    /* visibility: hidden; */
    `;

    return (
        <AutosizeInputWrapp>
            <input
                className={className}
                onChange={(e) => resizeInput(e)}
                {...inputProps}
                style={dynamicStyle}
                ref={(ref) => { inputEle = ref; }}
                value={AutosizeInputState.value}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                autoFocus
            />
            <CuSpan ref={(ref) => { sizerEle = ref; }}>{AutosizeInputState.value}</CuSpan>
            {placeholder ? <SizerDiv1 ref={(ref) => { placeHolderSizer = ref; }}>{placeholder}</SizerDiv1> : null}
        </AutosizeInputWrapp >

    );
};

const AutosizeInputWrapp = styled.div`
        display:inline-block;
        padding: 6px 14px;
        background: ${(props) => props.theme.colors.g100};
        border-radius: 30px;
        position: relative;
    `;
const SizerDiv1 = styled.div`
    position: absolute;
    overflow: scroll;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.1em;
    white-space: pre;
`;
const InputButton = styled(BaseInput)((props) => {
    const { theme } = props;
    const StyleButton = css`
        box-sizing: content-box;
        white-space: pre;
        letter-spacing: -0.9px;
        font-weight: 500;
        font-size: 1.1em;
        border: none;
        color: ${theme.colors.blue};
        caret-color: ${theme.colors.blue};
        outline: none;
        background: transparent;
  `;
    return StyleButton;
});

BaseInput.defaultProps = {
    disabled: false,
    color: 'red',
    type: 'text',
    label: '',
    className: null,
    placeholder: '',
    minWidth: 60,
    placeholderIsMinWidth: false,
};

export default React.memo(InputButton);
