import React from 'react';
import icon from './icon_copy.svg';
import styled from 'styled-components';
import {CopyToClipboard} from "react-copy-to-clipboard";

const StyledButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px); 
  }

  &:active {
    transform: translateY(0); 
  }

  .icon {
    margin-bottom: -10px;
    width: 30px;
    height: 30px;
  }
`;

const CopyWidget = ({text}) => {
  return (
    <CopyToClipboard text={text} onCopy={() => console.log('Copied:', text)}>
      <StyledButton>
        <img src={icon} alt="copy" className="icon"/>
      </StyledButton> 
    </CopyToClipboard>   
  );
}

export default CopyWidget;