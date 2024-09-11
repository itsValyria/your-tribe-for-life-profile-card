export let csr = false;

export async function load() {
  try {
    const response = await fetch('https://fdnd.directus.app/items/person/18');
    if (!response.ok) throw new Error('Failed to fetch data');
    
    const data = await response.json();

    return {
      person: data.data || {}
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      person: {},
      error: error.message
    };
  }
}
