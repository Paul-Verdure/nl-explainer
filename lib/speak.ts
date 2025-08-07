export function speakDutch(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = 0.8; 
  window.speechSynthesis.speak(utterance);
}