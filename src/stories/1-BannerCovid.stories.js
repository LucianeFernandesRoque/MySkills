import React from 'react';
import BannerCovid from '../components/BannerCovid';
import ThumbCovid from '../components/ThumbCovid';
import LucianeFernandes from './assets/LucianeFernandes.png';
import ReactJava from './assets/ReactJava.png';

export default {
  title: 'BannerCovid',
  component: BannerCovid,
};

export const Default = () => (
  <BannerCovid
    tag="Codando Feliz"
    title="React Feliz"
    DescriptionCovid="Fazendo projetos para adquirir conhecimento e arranjar um trabalho com programação."
  >
    <ThumbCovid
      src={ReactJava}
      alt="Thumb LuDev"
      title="Curso React Feliz"
      avatar={LucianeFernandes}
      channelName="DevLuciane"
      timer="03:19:03"
    />
  </BannerCovid>
);
