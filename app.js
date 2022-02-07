const lightboxImages = [
  { ids: ['woodland-stories'], images: [] },
  { ids: ['realms', 'worlds'], images: [] },
  { ids: ['castle-map'], images: [] },
  { ids: ['crest', 'medieval-armor'], images: [] },
  { ids: ['death-calculator'], images: [] },
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
    ],
    images: []
  },
  {
    ids: ['hydrocarbon-info-1', 'hydrocarbon-info-2', 'hydrocarbon-info-3'],
    images: []
  },
  {
    ids: [
      'renewables-1',
      'renewables-2',
      'renewables-3',
      'renewables-4',
      'renewables-5',
      'renewables-6',
      'renewables-7'
    ],
    images: []
  },
  { ids: ['altar'], images: [] },
  { ids: ['galaxy-heist'], images: [] },
  { ids: ['game-studio'], images: [] },
  { ids: ['omg'], images: [] }
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

function onClickExitLightbox() {
  const img = document.getElementById('lightbox-image');
  img.src = null;
  const lb = document.getElementById('lightbox');
  lb.classList.remove('lightbox-active');

  // Unlock the body's scrolling
  document.body.style.overflowY = 'auto';
}

function openLightbox(id) {
  // Show the lightbox
  const lb = document.getElementById('lightbox');
  lb.classList.add('lightbox-active');
  const img = document.getElementById('lightbox-image');
  img.src = `assets/img/projects/project-images/${id}.jpg`;
  
  // Lock the body's scrolling
  document.body.style.overflowY = 'hidden';
}
