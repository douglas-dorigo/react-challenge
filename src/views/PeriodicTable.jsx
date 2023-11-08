import React from 'react';
import { InputForm, HighlightedNames } from '../components';
import styled from 'styled-components';

const FullName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 84px;
  margin-bottom: 16px;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background: #212121;
  color: #e1e1e1;
  padding: 24px;
`;

function PeriodicTable() {
  return (
    <Banner>
      <FullName>
        <HighlightedNames />
      </FullName>
      <InputForm />
    </Banner>
  );
}

export default PeriodicTable;