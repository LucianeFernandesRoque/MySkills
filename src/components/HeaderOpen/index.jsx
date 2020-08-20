import React from 'react';
import { HeaderCovid, Wrapper } from './styles';
import LogoCovid from '../LogoCovid';
import ButtonCovid from '../ButtomCovid';

function HeaderOpen() {
  return (
    <HeaderCovid>
      <Wrapper>
        <LogoCovid />

        <ButtonCovid as="a" href="/video/new">
          New Skill
        </ButtonCovid>
      </Wrapper>
    </HeaderCovid>
  );
}

export default HeaderOpen;
