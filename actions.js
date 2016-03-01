export const START_TICK = 'START_TICK';
export const STOP_TICK  = 'STOP_TICK';
export const NEXT_TICK  = 'NEXT_TICK';

export function startTick () {
  return { type: START_TICK };
}

export function stopTick () {
  return { type: STOP_TICK };
}

export function nextTick () {
  return { type: NEXT_TICK };
}