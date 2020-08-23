import React, {useState} from 'react';
import icon from './icon_copy.svg';
import styled from 'styled-components';
import {CopyToClipboard} from "react-copy-to-clipboard";

const Content = styled.div`
  position: relative; 
  display: inline-block;
`;

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

const StyledStatus = styled.span`
  position: absolute;
  top: 10px;
  left: 50px;
  font-size: 15px;
  color: white;
  background: #27ae60;
  border-radius: 8px;
  height: 20px;
  width: 60px;
  line-height: 20px;
  transition: opacity 0.5s;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`;



const CopyWidget = ({text}) => {
  const [statusVisible, setStatusVisible] = useState(false);

  const handleCopyCick = () => {
    console.log('Copied:', text)
    setStatusVisible(true);
    setTimeout(() => setStatusVisible(false), 3000)
  };


  return (
    <Content>
      <CopyToClipboard text={text} onCopy={handleCopyCick}>
        <StyledButton>
          <img src={icon} alt="copy" className="icon"/>
        </StyledButton> 
      </CopyToClipboard>  
      <StyledStatus visible={statusVisible}>Copied</StyledStatus>
    </Content>
  );
}

export default CopyWidget;