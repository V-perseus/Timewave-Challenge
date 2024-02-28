import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCanvas() {
  noStore();
  try {
    console.log('fetching canvas')
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return true;
  } catch (error) {
    console.log(error)
  }
}
