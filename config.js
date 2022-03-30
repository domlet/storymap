var config = {
  style: 'mapbox://styles/domlet/ck97zlegt58vl1isuifb0l5hg',
  accessToken: 'pk.eyJ1IjoiZG9tbGV0IiwiYSI6ImNsMWRzYzNtZDBjemYza24yN3lnOHA0bmIifQ.HgGTeQO78NU_IKOO7mnbBQ',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  title: '10 places that made me @domlet',
  subtitle: 'Scroll very slowly.',
  // byline: '@domlet',
  footer: '<a href="https://twitter.com/domlet">@domlet</a> #builtwithmapbox<br>U.S. States: <a href="https://eric.clst.org/tech/usgeojson/">https://eric.clst.org/tech/usgeojson/</a><br>Santa Rosa city boundary:<a href="http://gisdata-santarosa.opendata.arcgis.com/datasets/city-limits">http://gisdata-santarosa.opendata.arcgis.com/datasets/city-limits</a><br>Country boundaries: <a href="https://datahub.io/core/geo-countries">https://datahub.io/core/geo-countries</a>',
  chapters: [{
      id: 'slug-style-id',
      title: 'Hi, I\'m dom.',
      image: 'images/photo-dombrassey-ybca.png',
      description: 'I\'m a young Gen-x-er or an old Millenial. I\'ve never read a Harry Potter book. ⬇ <b>Scroll down</b> for more.',
      location: {
        center: [-122.403, 37.792],
        zoom: 15.11,
        pitch: 57.00,
        bearing: -78.40
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'mapbox',
      title: 'Mapbox',
      image: 'images/photo-dom-langston-mapbox-adj.jpg',
      description: 'I used to spend a lot of time at a place called Mapbox (which was an office, back when we had those). Now I am actually <b>inside a Mapbox.</b>',
      location: {
        center: [-122.397, 37.791],
        zoom: 17,
        pitch: 57.00,
        bearing: -78.40
      },
      onChapterEnter: [{
          layer: '50-beale',
          opacity: 1
        },
        {
          layer: 'buildings-3d',
          opacity: 0
        },
      ],
      onChapterExit: [{
          layer: '50-beale',
          opacity: 1
        },
        {
          layer: 'buildings-3d',
          opacity: 0
        },
      ]
    },
    {
      id: 'sf',
      title: 'FiDi, San Francisco',
      image: 'images/photo-dom-parents.png',
      description: 'My parents met in this same neighborhood in 1977, two years after the end of the Vietnam war. They both worked in the <b>Transamerica&nbsp;building</b>.',
      location: {
        center: [-122.39467, 37.79218],
        zoom: 15.05,
        pitch: 60.00,
        bearing: -133.60
      },
      onChapterEnter: [{
          layer: '50-beale',
          opacity: 1
        },
        {
          layer: 'buildings-3d',
          opacity: 0
        },
      ],
      onChapterExit: [{
          layer: '50-beale',
          opacity: 1
        },
        {
          layer: 'buildings-3d',
          opacity: 0
        },
      ]
    },
    {
      id: 'san-quentin',
      title: 'San Quentin State Prison',
      image: 'images/photo-pup-student.png',
      description: 'Up over The Bridge, I taught and tutored writing <b>inside San Quentin</b>. I did that every Friday night for seven years. I still miss it. I love teaching.',
      location: {
        center: [-122.49798, 37.83522],
        zoom: 11.69,
        pitch: 59.50,
        bearing: -67.20
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'missouri',
      title: 'St. Louis, MO',
      image: 'images/photo-dom-siblings-2013.jpg',
      description: 'I grew up in the Bay Area, but my sisters and I were actually born <b>in the Midwest</b>. My parents moved to Missouri to get away from their parents.',
      location: {
        center: [-100.47895, 40.73474],
        zoom: 4.10,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'midwest-shape',
          opacity: 1
        },
        {
          layer: 'midwest-line',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'midwest-shape',
          opacity: 0
        },
        {
          layer: 'midwest-line',
          opacity: 0
        },

      ]
    },
    {
      id: 'hong-kong',
      title: 'Hong Kong, China',
      image: 'images/photo-gung-gung-china.jpg',
      description: 'Decades earlier, most of my mom\'s family escaped China in 1952 during the communist killings. But my great grandmother was too ill to travel. After her husband and children went to San Francisco, she died in their <b>village near Hong&nbsp;Kong</b>.',
      location: {
        center: [113.64356, 22.50065],
        zoom: 8.02,
        pitch: 0.50,
        bearing: -17.60
      },
    },
    // {
    //   id: 'vietnam',
    //   title: 'Việt Nam',
    //   image: 'images/photo-vietnam-war-choppers.jpg',
    //   description: 'My dad grew up in San Leandro and joined the U.S. Army during the <b>Vietnam war</b>. He lied and said he was 18.',
    //   location: {
    //     center: [94.25910, 15.04199],
    //     // center: [110.876, 17.506],
    //     zoom: 4.71,
    //     pitch: 0,
    //     bearing: 0
    //   },
    // },
    {
      id: 'asia',
      title: 'East Asia visit',
      image: 'images/photo-thai-students.png',
      description: 'I haven\'t been back to the village, but I have visited Asia and wrote <a href="https://freedomlet.wordpress.com/2013/09/02/the-decade-after/" target="_blank">an emo travel blog</a> about it. I visited a handful of countries and taught English in <b>Nakorn Ratchisima, Thailand</b>.',
      location: {
        center: [107.867, 12.227],
        zoom: 3,
        pitch: 0.00,
        bearing: -37.60
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'saint-harridan',
      title: 'Saint Harridan U.S. Tour',
      // image: 'images/sh-tour-locations-kepler-lo.png',
      image: 'images/photo-saint-harridan-bizcard.jpg',
      description: 'I got to see more of the U.S. during the Saint Harridan tour in 2014. After SCOTUS overturned DOMA in March 2013, we sold wedding suits to queer couples all across the country.',
      location: {
        center: [-103.89373, 39.07890],
        zoom: 3.77,
        pitch: 51.00,
        bearing: 45.60
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'temp',
      title: 'That\'s it for now!',
      // image: 'images/sh-tour-locations-kepler-lo.png',
      image: 'images/sh-tour-locations-kepler-lo.png',
      description: 'If you know how to import 3D arcs from kepler.gl into this <a href="https://www.mapbox.com/solutions/interactive-storytelling">Mapbox Storytelling template</a>, let me know! (Twitter link in footer.)',
      location: {
        center: [-103.89373, 39.07890],
        zoom: 3.77,
        pitch: 51.00,
        bearing: 45.60
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    // {
    //   id: 'lesbiantech',
    //   title: 'Lesbians Who Tech',
    //   image: './path/to/image/source.png',
    //   description: 'Copy these sections to add to your story.',
    //   location: {
    //     center: [-122.43576, 37.76215],
    //     zoom: 17.44,
    //     pitch: 60.00,
    //     bearing: 14.40
    //   },
    //   onChapterEnter: [{
    //     layer: 'lwtsummit-sf-17-polygons',
    //     opacity: 1
    //   }],
    //   onChapterExit: [{
    //     layer: 'lwtsummit-sf-17-polygons',
    //     opacity: 0
    //   }]
    // }
  ]
};
