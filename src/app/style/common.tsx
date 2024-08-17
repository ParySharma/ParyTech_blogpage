import styled, { css } from 'styled-components';

export const Typography: any = styled.p`
  padding: ${({ p }: any) => p || 0}px;
  font-weight: ${({ weight }: any) => weight || 500};
  color: ${({ color }: any) => color || 'var(--card-text-color)'} !important;
  text-align: ${({ position }: any) => position || 'left'};
  line-height: ${({ lineHeight }: any) =>
    lineHeight ? `${lineHeight}px` : 'normal'};
  width: ${({ width }: any) => (width ? '100%' : 'auto')};
  margin-left: ${({ ml }: any) => ml || 0}px;
  margin-right: ${({ mr }: any) => mr || 0}px;
  word-break: ${({ breakWord }: any) => breakWord};
  margin-top: ${({ mt }: any) => mt || 0}px;
  margin-bottom: ${({ mb }: any) => mb || 0}px;
  padding-bottom: ${({ pb }: any) => pb || 0}px;
  opacity: ${({ opacity }: any) => opacity || 1};
  z-index: ${({ zIndex }: any) => zIndex};
  background-color: ${({ bg }: any) => bg};
  border-top: ${({ borderTop }: any) => borderTop};
  border-bottom: ${({ borderBottom }: any) => borderBottom};
  font-family: ${({ ff }: any) => ff};
  text-transform: ${({ textTransform }: any) => textTransform || 'none'};
  ${({ nowrap }: any) =>
    nowrap
      ? `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`
      : ''};
  text-decoration: ${({ textDecoration }: any) => textDecoration || 'none'};
  white-space: ${({ whiteSpace }: any) => whiteSpace || 'unset'};

  // xs
  @media (min-width: 320px) {
    font-size: ${({ xs, xlg, lg, md, sm, size }: any) =>
      xs || xlg || lg || md || sm || size || 14}px;
  }

  // sm
  @media (min-width: 900px) {
    font-size: ${({ sm, xlg, lg, md, size }: any) =>
      sm || xlg || lg || md || size || 14}px;
  }

  // md
  @media (min-width: 1200px) {
    font-size: ${({ md, xlg, lg, size }: any) =>
      md || xlg || lg || size || 14}px;
  }

  // lg
  @media (min-width: 1400px) {
    font-size: ${({ lg, xlg, size }: any) => lg || xlg || size || 14}px;
  }

  // xlg
  @media (min-width: 1536px) {
    font-size: ${({ xlg, size }: any) => xlg || size || 14}px;
  }
`;
