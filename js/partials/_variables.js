const siteURL = "";

const codeLetters = [
  "A", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "T", "V", "X", "Y", "Z"
]


// SOUNDS...

const comet1 = new Howl({
  src: ['audio/comet1.mp3'],
  volume: 0.00,
  autoplay:false
});

const comet2 = new Howl({
  src: ['audio/comet2.mp3'],
  loop: false,
  autoplay:false,
  volume: 0.00
});

const cometLoop = new Howl({
  src: ['audio/comet_loop.mp3'],
  autoplay:false,
  loop: true,
  volume: 0,
});

const saneSound = new Howl({
  src: ['audio/smile.mp3', 'audio/smile.ogg' ],
  loop: false,
  autoplay:false,
  volume:1
});

const insaneSound = new Howl({
  src: ['audio/trespassing.mp3', 'audio/trespassing.ogg' ],
  loop: false,
  autoplay:false,
  volume:1
});