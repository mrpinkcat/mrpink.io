const actualAge = () => {
  const birthDate = new Date(903564000000).getTime();
  const timestamp = new Date().getTime();
  const age = (timestamp - birthDate) / 31556952000; // 31556952000 = 1 year
  return age.toString().slice(0, 2);
}

export {
  actualAge,
}
