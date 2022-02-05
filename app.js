const lightboxImages = [
  { ids: ['woodland-stories'] },
  { ids: ['realms', 'worlds'] },
  { ids: ['castle-map'] },
  { ids: ['crest', 'medieval-armor'] },
  { ids: ['death-calculator'] },
  {
    ids: [
      'energy-map',
      'fracking-game',
      'energy-career-quiz',
      'geologic-timeline',
      'geosteering-game',
      'pipeline-kiosk',
      'prospector',
      'seismic-kiosks',
      'tectonics',
      'transportation-game',
      'traps-interactive-projection',
      'unconventional-energy-kiosks'
    ]
  },
  {
    ids: ['hydrocarbon-info-1', 'hydrocarbon-info-2', 'hydrocarbon-info-3']
  },
  {
    ids: [
      'renewables-1',
      'renewables-2',
      'renewables-3',
      'renewables-4',
      'renewables-5',
      'renewables-6'
    ]
  },
  { ids: ['altar'] },
  { ids: ['galaxy-heist'] },
  { ids: ['game-studio'] },
  { ids: ['omg'] }
];

function onClickProjectCard(event) {
  let el = event.target;
  if (el.nodeName == 'IMG') {
    el = el.parentNode;
  }

  let id;
  el.className.split(' ').forEach((cl) => {
    if (cl.indexOf('lb-') == 0) id = cl.substring('lb-'.length);
  });
  if (id) openLightbox(id);
}

function openLightbox(id) {
  const lb = document.getElementById('lightbox');
  // lb.classList.add('lightbox-active');

  navigator.clipboard.writeText(id);
}
