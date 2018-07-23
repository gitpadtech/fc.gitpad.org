export function page2Title(path) {
  const matched = path.match(/([\w-]+)\/?$/);
  if (matched) {
    return matched[1]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return '';
}