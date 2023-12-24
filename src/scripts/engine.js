const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');
let mapedKeys = [];
let audio = new Audio('src/tunes/a.wav');

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add('active');
  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
};

pianoKeys.forEach((key) => {
  const keyData = key.dataset.key;
  key.addEventListener('click', () => playTune(keyData));
  mapedKeys.push(keyData);
});

document.addEventListener('keydown', (event) => {
  if (mapedKeys.includes(event.key)) {
    playTune(event.key);
  }
});

const handleVolume = (event) =>{
  audio.volume = event.target.value;
}

volumeSlider.addEventListener('input', handleVolume);


const showHideKeys = (event) =>{
  pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheck.addEventListener('click',showHideKeys);