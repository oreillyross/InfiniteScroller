//https://github.com/bvaughn/react-window

import * as React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #c0c0c0;
`;

const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const Scroller = () => {
  return (
    <StyledSection>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List height={height} width={width} itemSize={20} itemCount={300}>
              {Row}
            </List>
          );
        }}
      </AutoSizer>
    </StyledSection>
  );
};

export { Scroller };
