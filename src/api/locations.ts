export type Locations = {
  [key: string]: [number, string][]
}

async function getLocations(): Promise<Locations> {
  let res = await fetch('http://localhost:3001/locations');
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Request error')
  }
}

export default getLocations;
