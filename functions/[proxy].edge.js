export default async function handler(request, context) {
  const redirectHosts = new Set([
    'www.servicestreetcolorado.com',
    'www.servicestreetgeorgia.com',
    'www.servicestreettennessee.com',
    'www.servicestreettexas.com',
  ]);

  const url = new URL(request.url);

  if (redirectHosts.has(url.hostname)) {
    url.hostname = 'www.servicestreet.com';
    return Response.redirect(url.toString(), 308); // permanent redirect
  }

  // Continue with normal request
  return fetch(request);
}
