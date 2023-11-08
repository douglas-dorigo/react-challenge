import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { highlightNames } from '../utils/elementUtils'
import './HighlightedNames.css';
import styled from 'styled-components';

const LastName = styled.span`
  margin-top: 5px
`;

function HighlightedNames() {
  const firstName = useSelector((state) => state.names.firstName) || 'Breaking';
  const lastName = useSelector((state) => state.names.lastName) || 'Bad';

  const highlightedFirstName = useMemo(() => highlightNames(firstName), [firstName]);
  const highlightedLastName = useMemo(() => highlightNames(lastName), [lastName]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: highlightedFirstName }} />
      <LastName dangerouslySetInnerHTML={{ __html: highlightedLastName }} />
    </>
  );
}

export default HighlightedNames;