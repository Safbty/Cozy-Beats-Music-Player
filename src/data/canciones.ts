export type Cancion = {
  id: string;
  titulo: string;
  artista: string;
  duracion: string;
  imagenURL: string;
};

export const mockCancionesRecientes: Cancion[] = [
  {
    id: '1',
    titulo: 'Awakening',
    artista: 'j´san',
    duracion: '3:42',
    imagenURL:
      'https://fastly.picsum.photos/id/857/200/200.jpg?hmac=HAtw8t8dR2kLoj5Y-AUwqz3BWYUX9bLv16LyNN8dEBY',
  },
  {
    id: '2',
    titulo: 'Snowstalgia',
    artista: 'Invention_',
    duracion: '3:05',
    imagenURL:
      'https://fastly.picsum.photos/id/676/200/200.jpg?hmac=hgeMQEIK4Mn27Q2oLRWjXo1rgxwTbk1CnJE954h_HyM',
  },
  {
    id: '3',
    titulo: 'Castle',
    artista: 'Lukrembo',
    duracion: '3:01',
    imagenURL:
      'https://fastly.picsum.photos/id/1040/200/200.jpg?hmac=l5Cp_plxzlfQobWWyd5uqBPiqjX1CApBpWP3w8DzYK0',
  },
  {
    id: '4',
    titulo: 'Dreaming',
    artista: 'Lee',
    duracion: '4:45',
    imagenURL:
      'https://fastly.picsum.photos/id/421/200/200.jpg?hmac=Kix073-H73pkRedH4XJ8fenHLI9Sd9akWlOFjKog0EA',
  },
  {
    id: '5',
    titulo: 'Soulful',
    artista: 'L´indécis',
    duracion: '3:41',
    imagenURL:
      'https://fastly.picsum.photos/id/164/200/200.jpg?hmac=UA4QhIt441pdFJ6Uam2yCxzda_KjWgQgy8fYs_-NFEM',
  },
  {
    id: '6',
    titulo: 'New Home (Slowed)',
    artista: 'Austin Farwell',
    duracion: '2:55',
    imagenURL:
      'https://fastly.picsum.photos/id/946/200/200.jpg?hmac=a01jNqgHjp0Vj_csHXBpEttrSyo1vFrUTL1fwgKYG0Y',
  },
  {
    id: '7',
    titulo: 'I Wish It Would Never Stop Snowing',
    artista: 'Sleepy Fish',
    duracion: '3:17',
    imagenURL:
      'https://fastly.picsum.photos/id/726/200/200.jpg?hmac=W7sB7Apj0ousj_seKHvFyR4r0Hw0RGFP86_KqHSqe0s',
  },
];

export const mockCancionesPopulares: Cancion[] = [
  {
    id: 'p1',
    titulo: 'Sakura Trees',
    artista: 'Saib',
    duracion: '1:41',
    imagenURL:
      'https://fastly.picsum.photos/id/82/200/200.jpg?hmac=ATNAhTLN2dA0KmTzSE5D9XiPe3GMX8uwxpFlhU7U5OY',
  },
  {
    id: 'p2',
    titulo: 'You',
    artista: 'Cocabona',
    duracion: '2:50',
    imagenURL:
      'https://fastly.picsum.photos/id/823/200/200.jpg?hmac=zD0Ti1kYqMOUsfNVS7xtDou-2ECcI0RXYs18C54EdYo',
  },
  {
    id: 'p3',
    titulo: 'Nautilus',
    artista: 'WYS',
    duracion: '2:50',
    imagenURL:
      'https://fastly.picsum.photos/id/446/200/200.jpg?hmac=PkaLcCtgL4IvAz-gsxbCXz_tl0qdVUGOrxhYLrywa-c',
  },
  {
    id: 'p4',
    titulo: 'Head Above Water',
    artista: 'GLASWING',
    duracion: '3:18',
    imagenURL:
      'https://fastly.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo',
  },
  {
    id: 'p5',
    titulo: 'Letting Go',
    artista: 'Potsu',
    duracion: '3:19',
    imagenURL:
      'https://fastly.picsum.photos/id/661/200/200.jpg?hmac=pTRumV7JHMWLu9tuOU6quaMWqF-oxcymEOAvPNfXG4I',
  },
  {
    id: 'p6',
    titulo: 'City Lounge',
    artista: 'Saib',
    duracion: '2:39',
    imagenURL:
      'https://fastly.picsum.photos/id/249/200/200.jpg?hmac=75zqoHvrxGGVnJnS8h0gUzZ3zniIk6PggG38GjmyOto',
  },
  {
    id: 'p7',
    titulo: 'Take Me Somewhere Far Away from Here',
    artista: 'Seto',
    duracion: '3:17',
    imagenURL:
      'https://fastly.picsum.photos/id/1083/200/200.jpg?hmac=ocBiYtawFGXm884DNfTBRQy65ZWvsTQf_XCnlTUdtB4',
  },
];

export const mockCancionesNuevas: Cancion[] = [
  {
    id: 'n1',
    titulo: 'Changes',
    artista: 'Rosemary Beats',
    duracion: '1:58',
    imagenURL:
      'https://fastly.picsum.photos/id/239/200/200.jpg?hmac=8JqlXUpZ9Xy0H6tMK8sCPQAYU9vUn9Qa8Kg-U9h3sCY',
  },
  {
    id: 'n2',
    titulo: 'Field Of Daisies',
    artista: 'Brian Stiroh',
    duracion: '3:19',
    imagenURL:
      'https://fastly.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
  },
  {
    id: 'n3',
    titulo: 'Drive',
    artista: 'Pacific',
    duracion: '3:07',
    imagenURL:
      'https://fastly.picsum.photos/id/555/200/200.jpg?hmac=SPdHg_AxaDTFgZCoJymemxudcniLOiP2P5k6T8Eb-kc',
  },
  {
    id: 'n4',
    titulo: 'Autumn Morning',
    artista: 'Softy',
    duracion: '3:41',
    imagenURL:
      'https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g',
  },
  {
    id: 'n5',
    titulo: 'Moving On',
    artista: 'Nymano',
    duracion: '3:12',
    imagenURL:
      'https://fastly.picsum.photos/id/588/200/200.jpg?hmac=amAMbyBq8ZvuCFGI8jPIt928PLIRtxNQ33bISsbDAys',
  },
  {
    id: 'n6',
    titulo: 'Time Out',
    artista: 'Space Windu',
    duracion: '2:12',
    imagenURL:
      'https://fastly.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY',
  },
  {
    id: 'n7',
    titulo: 'Good Night',
    artista: 'No Spirit',
    duracion: '3:00',
    imagenURL:
      'https://fastly.picsum.photos/id/723/200/200.jpg?hmac=_sO25hgEAx99R1W5nOFsCmrSDTpHGmXIEXDywKpjfXE',
  },
];

export const mockCancionesFavoritas: Cancion[] = [
  {
    id: 'f1',
    titulo: 'Blue Haze',
    artista: 'Jinsang',
    duracion: '2:38',
    imagenURL:
      'https://fastly.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8',
  },
  {
    id: 'f2',
    titulo: 'Perfect Day',
    artista: 'Tundra Beats',
    duracion: '4:15',
    imagenURL:
      'https://fastly.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50',
  },
  {
    id: 'f3',
    titulo: 'Purple',
    artista: 'Dontcry',
    duracion: '1:54',
    imagenURL:
      'https://fastly.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw',
  },
  {
    id: 'f4',
    titulo: 'Flowers',
    artista: 'In Love With A Ghost',
    duracion: '4:13',
    imagenURL:
      'https://fastly.picsum.photos/id/701/200/200.jpg?hmac=kPmkJLn8J5cv4wQc5yeM7iQpuoq405kTkMTzQ2hb9sM',
  },
  {
    id: 'f5',
    titulo: 'So_far',
    artista: 'Invention_',
    duracion: '2:04',
    imagenURL:
      'https://fastly.picsum.photos/id/1022/200/200.jpg?hmac=MjK2sur6luq2UfxMPWBFBuPyvZYyYLYvQH9kCmEGJRY',
  },
  {
    id: 'f6',
    titulo: 'Transcend',
    artista: 'Evel Needle',
    duracion: '2:53',
    imagenURL:
      'https://fastly.picsum.photos/id/1009/200/200.jpg?hmac=2D10SFaYliFjzL4jp_ZjLmZ1_2jaJw89CntiJGjdlGE',
  },
  {
    id: 'f7',
    titulo: 'Near Dark',
    artista: 'Bluewerks',
    duracion: '2:42',
    imagenURL:
      'https://fastly.picsum.photos/id/497/200/200.jpg?hmac=pD3JCR-6DQCB69-sRAmzUn-m8I5V-ugaHUuCKh9gAFU',
  },
];
