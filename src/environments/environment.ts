// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// const ec2url = 'http://ec2-35-154-98-108.ap-south-1.compute.amazonaws.com:3000/';
const ec2url = 'http://localhost:3000/';
export const environment = {
  production: false,
  upload_url: ec2url + 'v1/videos/upload',
  authnetication_url: ec2url + 'v1/user/authenticate',
  signup_url: ec2url + 'v1/user/signup',
  module_url: ec2url + 'v1/modules',
  metaDataURL: ec2url + 'v1/metadata'
};
