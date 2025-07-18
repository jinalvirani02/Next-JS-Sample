export default async function handler(request, context) {
  const redirectHosts = [
    'next-js-sample.devcontentstackapps.com',
  ];

  const url = new URL(request.url);
  console.log(url.hostname, "1");
  if (redirectHosts.includes(url.hostname)) {
    url.hostname = 'https://consent-test.devcontentstackapps.com/';
    return Response.redirect(url.toString(), 308); // permanent redirect
  }
  console.log(url.hostname, "2");

  // Continue with normal request
  return fetch(request);
}
