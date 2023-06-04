export function toAppNumberFormat(number) {
  const string = number.toString();
  let formattedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    const digit = string.charAt(i);

    if (i < string.length - 1 && (string.length - i - 1) % 3 === 0) {
      formattedString = ',' + formattedString;
    }

    formattedString = digit + formattedString;
  }

  return formattedString;
}
