const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)));

// All inputs and outputs are viewport coordinates, never transformed local coordinates.
export function tooltipGeometry(anchor, size, viewport, previousSide) {
  const margin = 12;
  const gap = 48;
  const left = viewport.left + margin;
  const top = viewport.top + margin;
  const right = viewport.left + viewport.width - margin;
  const bottom = viewport.top + viewport.height - margin;
  const ax = clamp(anchor.x, left, right);
  const ay = clamp(anchor.y, top, bottom);
  const { width, height } = size;
  const space = { right: right - ax, left: ax - left, bottom: bottom - ay, top: ay - top };
  const fits = side => space[side] >= gap + (side === 'left' || side === 'right' ? width : height);
  const side = (previousSide && fits(previousSide) && previousSide)
    || ['right', 'left', 'bottom', 'top'].find(fits)
    || Object.keys(space).sort((a, b) => space[b] - space[a])[0];
  let x, y, edge, elbow;
  if (side === 'right' || side === 'left') {
    const direction = side === 'right' ? 1 : -1;
    x = clamp(side === 'right' ? ax + gap : ax - gap - width, left, right - width);
    y = clamp(ay - 28, top, bottom - height);
    edge = { x: side === 'right' ? x : x + width, y: clamp(ay + 18, y + 14, y + height - 14) };
    elbow = { x: edge.x - direction * Math.min(20, Math.abs(edge.x - ax) / 2), y: edge.y };
  } else {
    const direction = side === 'bottom' ? 1 : -1;
    x = clamp(ax - 28, left, right - width);
    y = clamp(side === 'bottom' ? ay + gap : ay - gap - height, top, bottom - height);
    edge = { x: clamp(ax + 18, x + 14, x + width - 14), y: side === 'bottom' ? y : y + height };
    elbow = { x: edge.x, y: edge.y - direction * Math.min(20, Math.abs(edge.y - ay) / 2) };
  }
  // Two independent strokes, with a small, consistent break at the elbow.
  const length = Math.hypot(elbow.x - ax, elbow.y - ay) || 1;
  const end = { x: elbow.x - (elbow.x - ax) / length * 2, y: elbow.y - (elbow.y - ay) / length * 2 };
  return { x, y, side, first: `M ${ax} ${ay} L ${end.x} ${end.y}`, second: `M ${elbow.x} ${elbow.y} L ${edge.x} ${edge.y}` };
}
