function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  const time = {
    year: Math.floor(seconds / 31536000),
    day: Math.floor((seconds % 31536000) / 86400),
    hour: Math.floor((seconds % 86400) / 3600),
    minute: Math.floor((seconds % 3600) / 60),
    second: seconds % 60,
  };

  const validValues = Object.entries(time)
    .filter((curr) => curr[1] !== 0) //entender isso
    .map(([key, value]) => `${value} ${key}${value > 1 ? 's' : ''}`);

  if (validValues.length === 1) {
    return validValues.join('');
  } else if (validValues.length === 2) {
    return validValues.join(' and ');
  } else if (validValues.length === 3) {
    let commaSeparated = `${validValues
      .slice(0, validValues.length - 2)
      .join('')}, `;
    let andSeparated = validValues.slice(-2).join(' and ');
    return commaSeparated.concat(andSeparated);
  } else if (validValues.length === 3) {
    let commaSeparated = validValues
      .slice(0, validValues.length - 2)
      .join(', ');
    let andSeparated = validValues.slice(-2).join(' and ');
    return commaSeparated.concat(andSeparated);
  } else if (validValues.length === 4) {
    let commaSeparated = validValues
      .slice(0, validValues.length - 2)
      .join(', ');
    let andSeparated = validValues.slice(-2).join(' and ');
    return commaSeparated.concat(andSeparated);
}
else if (validValues.length === 5) {
  let commaSeparated = validValues
    .slice(0, validValues.length - 2)
    .join(', ');
  let andSeparated = validValues.slice(-2).join(' and ');
  return commaSeparated.concat(andSeparated);
}
}

console.log(formatDuration(62));
