// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const ec2URL = 'http://ec2-35-154-98-108.ap-south-1.compute.amazonaws.com:3000/';

export const environment = {
  production: false,
  upload_url: ec2URL + 'v1/videos/upload',
  // upload_url: 'https://v-tutor-backend.herokuapp.com/v1/videos/upload'
  authnetication_url: ec2URL + 'v1/user/authenticate',
  signup_url: ec2URL + 'v1/user/signup'
};
