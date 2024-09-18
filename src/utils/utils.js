
export function cubic(p5, p0, p1, p2, p3, t) {
  let v1 = quadratic(p5, p0, p1, p2, t);
  let v2 = quadratic(p5, p1, p2, p3, t);
  let x = p5.lerp(v1.x, v2.x, t);
  let y = p5.lerp(v1.y, v2.y, t);
  return p5.createVector(x, y);
}

export function quadratic(p5, p0, p1, p2, t) {
  let x1 = p5.lerp(p0.x, p1.x, t);
  let y1 = p5.lerp(p0.y, p1.y, t);
  let x2 = p5.lerp(p1.x, p2.x, t);
  let y2 = p5.lerp(p1.y, p2.y, t);
  let x = p5.lerp(x1, x2, t);
  let y = p5.lerp(y1, y2, t);
  return p5.createVector(x, y);
}

export function windowWidth() {
  return window.screen.width > 600 ? 600 : 300
}