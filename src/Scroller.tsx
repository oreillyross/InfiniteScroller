import * as React from "react";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: grey;
`;

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

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
