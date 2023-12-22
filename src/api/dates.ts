async function getAvailableDates(): Promise<string[]> {
  let res = await fetch('http://localhost:3001/available_dates');
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Request error')
  }
}

export default getAvailableDates;
