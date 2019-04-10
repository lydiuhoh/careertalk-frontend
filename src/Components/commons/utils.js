export function getSize(size) {
  switch (size) {
    case 'sm':
      return '30';
    case 'md':
      return '40';
    case 'lg':
    default:
      return '50';
  }
}
