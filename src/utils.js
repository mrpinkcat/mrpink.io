const actualAge = () => {
  const birthDate = new Date('08-20-1998').getTime();
  const timestamp = new Date().getTime();
  const age = (timestamp - birthDate) / 31556952000; // 31556952000 = 1 year
  return age.toString().slice(0, 2);
}

export {
  actualAge,
}