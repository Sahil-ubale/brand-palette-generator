import { palettes } from '../data/palettes';

export function generatePalette(industry, style) {
  const options = palettes[industry]?.[style] || palettes["SaaS"]["Modern"];
  // For standard generation (e.g. first load), just pick the first option
  return options[0];
}

export function shufflePalette(industry, style, currentPalette) {
  const options = palettes[industry]?.[style] || palettes["SaaS"]["Modern"];
  if (options.length <= 1) return options[0];
  
  // Find a different palette than the current one
  const availableOptions = options.filter(p => p.primary !== currentPalette.primary || p.secondary !== currentPalette.secondary);
  
  if (availableOptions.length === 0) return options[0];
  
  const randomIndex = Math.floor(Math.random() * availableOptions.length);
  return availableOptions[randomIndex];
}
