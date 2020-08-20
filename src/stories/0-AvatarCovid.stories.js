import React from 'react';
import AvatarCovid from '../components/AvatarCovid';
import LucianeFernandes from './assets/LucianeFernandes.png';

export default {
  title: 'AvatarCovid',
  component: AvatarCovid,
};

export const Default = () => (
  <AvatarCovid photo={LucianeFernandes} channelName="DevLuciane" />
);
