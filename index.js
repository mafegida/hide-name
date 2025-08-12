export function hideName(name) {
  if (
    typeof name !== 'string' ||
    !/^[A-Za-z\s]+$/.test(name.trim()) ||
    name.trim().split(/\s+/).length < 2
  ) {
    return 'Input provided is not a valid name.';
  }
  const splitNames = name.trim().toUpperCase().split(/\s+/);
  const surname = splitNames.pop();
  const maskedSurname = surname[0] + '.';
  const maskedFirstNames = splitNames.map((firstName) => {
    if (firstName.length <= 3) {
      return firstName;
    }
    return (
      firstName.slice(0, 2) +
      '*'.repeat(firstName.length - 3) +
      firstName[firstName.length - 1]
    );
  });
  return maskedFirstNames.join(' ') + ' ' + maskedSurname;
}
