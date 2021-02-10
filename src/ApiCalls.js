export const fetchBTCPrice = () => {
  return fetch('https://api.nomics.com/v1/currencies/ticker?key=75536bae05c2ce328bdd68772cb4522b&ids=BTC')
  .then(res => res.json())
}