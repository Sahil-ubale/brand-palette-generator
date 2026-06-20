// Calculate the relative luminance of a color
function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Convert HEX to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate the contrast ratio between two colors
export function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const lightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const ratio = (lightest + 0.05) / (darkest + 0.05);
  return Math.round(ratio * 100) / 100;
}

// Evaluate WCAG compliance
export function evaluateWCAG(ratio, isLargeText = false) {
  const aaTarget = isLargeText ? 3.0 : 4.5;
  const aaaTarget = isLargeText ? 4.5 : 7.0;

  if (ratio >= aaaTarget) return { status: 'AAA Passed', pass: true };
  if (ratio >= aaTarget) return { status: 'AA Passed', pass: true };
  return { status: 'Needs Improvement', pass: false };
}
