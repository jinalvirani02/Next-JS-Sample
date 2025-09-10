export default async function handler() {
  try {
    const response = await fetch(
      'https://nextjs-launch-challenge-test.devcontentstackapps.com/api/test'
    );

    const data = await response.json();

    // Log response in Edge logs
    console.log('API response:', data);

    // Return simple success response
    return new Response('Logged API response', { status: 200 });
  } catch (error) {
    console.error('Error fetching API:', error);
    return new Response('Error occurred', { status: 500 });
  }
}
