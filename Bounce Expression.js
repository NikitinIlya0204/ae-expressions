amp = 0.02;    // Amplitude — how strong the bounce is
freq = 2;      // Frequency — how fast the bounce oscillates
decay = 6;     // Decay — how quickly the bounce slows down

if (numKeys == 0) {
  value;
} else {
  n = nearestKey(time).index;
  if (key(n).time > time) n--;

  if (n == 0) {
    value;
  } else {
    t = time - key(n).time;
    v = velocityAtTime(key(n).time - thisComp.frameDuration / 10);
    oscillation = Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t);
    value + v * amp * oscillation;
  }
}