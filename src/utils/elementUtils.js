
const periodicElements = [
  'ac', 'ag', 'al', 'ar', 'as', 'at', 'au', 'b', 'ba', 'be', 'bh', 'bi', 'bk', 'br', 'c', 'ca', 'cd', 'ce', 'cf', 'cl', 'cm', 'cn', 'co', 'cr', 'cs',
  'cu', 'db', 'ds', 'dy', 'er', 'es', 'eu', 'f', 'fe', 'fl', 'fm', 'fr', 'ga', 'gd', 'he', 'hf', 'hg', 'ho', 'hs', 'i', 'in', 'ir', 'k', 'kr', 'la',
  'li', 'lr', 'lu', 'lv', 'mc', 'md', 'mg', 'mn', 'mo', 'mt', 'n', 'na', 'nb', 'nd', 'ne', 'nh', 'ni', 'np', 'o', 'og', 'os', 'p', 'pa', 'pb', 'pd',
  'pm', 'po', 'pr', 'pt', 'pu', 'ra', 'rb', 're', 'rf', 'rg', 'rh', 'rn', 'ru', 's', 'sb', 'sc', 'se', 'sg', 'si', 'sm', 'sn', 'sr', 'ta', 'tb',
  'tc', 'te', 'th', 'ti', 'tl', 'tm', 'ts', 'u', 'v', 'w', 'xe', 'y', 'yb', 'zn', 'zr'
];


export const highlightNames = (text) => {
  // Sort the periodic elements array by length, with longer elements first
  const sortedElements = periodicElements.sort((a, b) => b.length - a.length);

  // Iterate through the sorted elements and find the first match
  let highlightedText = text;
  sortedElements.some((element) => {
    const regex = new RegExp(`(${element})`, 'ig');
    
    if (regex.test(text.toLowerCase())) {
      highlightedText = text.replace(regex, '<span class="highlight">$&</span>');
      return true; // Stop searching after the first match
    }
    return false;
  });

  return highlightedText;
};
