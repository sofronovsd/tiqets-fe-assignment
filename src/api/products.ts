export type Product = {
  available_dates: string[];
  city_id: number;
  discount_percentage: number;
  id: number;
  image: string;
  price: number;
  product_url: string;
  summary: string;
  title: string;
}

async function getProducts(date: string, cityId: number): Promise<Product[]> {
  let res = await fetch(`http://localhost:3001/products?date=${date}&city_id=${cityId}`);
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Request error')
  }
}

export default getProducts;
