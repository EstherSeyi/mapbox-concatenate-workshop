var config = {
  style: 'mapbox://styles/estherseyi/ck1j7pk7r08f31cnnp679b7gu', //TODO
  accessToken:
    'pk.eyJ1IjoiZXN0aGVyc2V5aSIsImEiOiJjazFqMjhieW8wYnhmM2Ntbncyd2xocjZkIn0.NSkR45l33WVaKOlITcG09Q', //TODO
  title: 'My Life Story with Locations', //TODO
  subtitle: 'Some Awesome Subtitle', //TODO
  byline: 'By Esther', //TODO
  footer: 'Created at Concatenate Lagos 2019',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  chapters: [
    //TODO replace this data with data from the first point in your dataset
    {
      id: 'place.14906028133745720',
      title: 'Ibadan North East, Oyo, Nigeria',
      description:
        'Home town and my place of birth. Where it all started! lol.',
      location: {
        center: [3.9581545502822735, 7.333079683789421],
        zoom: 11.55092311456456,
        pitch: 60,
        bearing: -38.400000000000034
      }
    },
    {
      id: 'region.3865073976679850',
      title: 'Lagos, Nigeria',
      description:
        'At age 3, I moved to Lagos with my family, Ketu to be precise, this is where I grew up and have all my childhood memories.',
      location: {
        center: [3.4253915858509743, 6.447273571760661],
        zoom: 11.091866014839145,
        pitch: 0,
        bearing: 35.19999999999959
      }
    },
    {
      id: 'region.10445760579820720',
      title: 'Osun, Nigeria',
      description:
        "I schooled here at the prestigious Bowen University, I also did my NYSC here at Osun state university's library",
      location: {
        center: [4.514697903347098, 7.493671093083549],
        zoom: 11.022582808990405,
        pitch: 58.99999999999999,
        bearing: -149.60000000000025
      }
    },
    {
      id: 'region.16669180497069110',
      title: 'Ogun, Nigeria',
      description:
        'Home sweet home! My family eventually moved here. This is home to me now.',
      location: {
        center: [3.530333099216847, 7.031732371771497],
        zoom: 12.936899775544166,
        pitch: 46.50000000000001,
        bearing: -50.39999999999976
      }
    }
    //TODO Copy-paste more chapters here - one for each point in your dataset!
  ]
};
