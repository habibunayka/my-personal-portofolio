import test from 'node:test';
import assert from 'node:assert/strict';
import { tooltipGeometry } from '../src/utils/tooltipGeometry.js';

for (const [width, height] of [[320, 568], [390, 844], [768, 1024], [1440, 1000], [1920, 1080], [320, 280]]) {
  test(`tooltip stays bounded at edges and corners: ${width}x${height}`, () => {
    const viewport = { left: 0, top: 0, width, height };
    const size = { width: Math.min(250, width - 24), height: Math.min(175, height - 24) };
    for (const x of [0, 12, width / 2, width - 12, width]) {
      for (const y of [0, 12, height / 2, height - 12, height]) {
        const result = tooltipGeometry({ x, y }, size, viewport);
        assert.ok(result.x >= 12 && result.x + size.width <= width - 12);
        assert.ok(result.y >= 12 && result.y + size.height <= height - 12);
        assert.ok(!result.first.includes('NaN') && !result.second.includes('NaN'));
        const edge = result.second.match(/L ([-\d.]+) ([-\d.]+)/).slice(1).map(Number);
        assert.ok(edge[0] >= result.x && edge[0] <= result.x + size.width);
        assert.ok(edge[1] >= result.y && edge[1] <= result.y + size.height);
        assert.ok(edge[0] === result.x || edge[0] === result.x + size.width || edge[1] === result.y || edge[1] === result.y + size.height);
      }
    }
  });
}

test('uses all four orientations and preserves a fitting side while moving', () => {
  const view = { left: 0, top: 0, width: 400, height: 800 };
  const size = { width: 250, height: 140 };
  assert.equal(tooltipGeometry({ x: 12, y: 200 }, size, view).side, 'right');
  assert.equal(tooltipGeometry({ x: 388, y: 200 }, size, view).side, 'left');
  assert.equal(tooltipGeometry({ x: 200, y: 12 }, size, view).side, 'bottom');
  assert.equal(tooltipGeometry({ x: 200, y: 788 }, size, view).side, 'top');
  assert.equal(tooltipGeometry({ x: 650, y: 300 }, size, { ...view, width: 1440 }, 'left').side, 'left');
});

test('visual viewport offsets are accounted for', () => {
  const result = tooltipGeometry({ x: 170, y: 250 }, { width: 200, height: 140 }, { left: 120, top: 180, width: 390, height: 600 });
  assert.ok(result.x >= 132 && result.x + 200 <= 498);
  assert.ok(result.y >= 192 && result.y + 140 <= 768);
});
