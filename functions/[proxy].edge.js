export default async function handler(request, context) {
  const redirectHosts = [
    'https://nextjs-launch-challenge-eee898.devcontentstackapps.com',
    'https://nextjs-app-router-csr.devcontentstackapps.com/'
  ];

  const url = new URL(request.url);

  if (redirectHosts.includes(url.hostname)) {
    url.hostname = 'https://consent-test.devcontentstackapps.com/';
    return Response.redirect(url.toString(), 308); // permanent redirect
  }

  // Continue with normal request
  return fetch(request);
}
