import styled, { css } from 'styled-components';

export const func = css`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
export const Container = styled.div`
  ${func}
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  > div {
    ${func}
    background: rgba(0, 0, 0, 0.8);
  }
  span {
    z-index: 2;
  }
`;
