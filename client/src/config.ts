// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '15do3ej6pk'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-87k6gdjl2635f2y4.us.auth0.com',            // Auth0 domain
  clientId: 'Jb4YeizLnVzuDTfzmYE6lzF9aEil2dxN',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
