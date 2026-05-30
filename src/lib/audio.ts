let currentAudio: HTMLAudioElement | null = null;

export function stopAudio() {
  if (!currentAudio) return;

  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
}

export function playAudio(src: string) {
  stopAudio();

  currentAudio = new Audio(src);

  currentAudio.play().catch((error) => {
    console.error("Audio failed:", error);
  });

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