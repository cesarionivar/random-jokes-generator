export const fetchJoke = async () => {
  const resp = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });

  const joke = await resp.json();
  return joke;
};
