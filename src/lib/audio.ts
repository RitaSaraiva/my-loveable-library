let currentAudio: HTMLAudioElement | null = null;
let currentSrc: string | null = null;

export function stopAudio() {
  if (!currentAudio) return;

  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
  currentSrc = null;
}

export function playAudio(src: string) {
  stopAudio();

  currentSrc = src;
  currentAudio = new Audio(src);

  currentAudio.play().catch((error) => {
    console.error("Audio failed:", error);
  });

  return currentAudio;
}

export function pauseAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
}

export function resumeAudio() {
  if (!currentAudio) return;
  currentAudio.play().catch((error) => {
    console.error("Audio failed:", error);
  });
}

export function replayAudio() {
  if (!currentAudio && currentSrc) {
    playAudio(currentSrc);
    return;
  }

  if (!currentAudio) return;

  currentAudio.currentTime = 0;
  currentAudio.play().catch((error) => {
    console.error("Audio failed:", error);
  });
}

export function getCurrentAudio() {
  return currentAudio;
}

export function playConceptAudio(conceptId: string) {
  return playAudio(`/audio/concepts/${conceptId}.mp3`);
}

export function playPairAudio(pairId: string) {
  return playAudio(`/audio/pairs/${pairId}.mp3`);
}

export function playScanAnotherConceptAudio() {
  return playAudio(`/audio/system/scan-another-concept.mp3`);
}

export function playPersonAudio(personId: string) {
  return playAudio(`/audio/people/${personId}.mp3`);
}

export function playEventAudio(eventId: string) {
  return playAudio(`/audio/events/${eventId}.mp3`);
}