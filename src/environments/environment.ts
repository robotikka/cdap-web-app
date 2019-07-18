// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  upload_url: 'http://ec2-52-66-30-76.ap-south-1.compute.amazonaws.com:3000/v1/videos/upload',
  // upload_url: 'https://v-tutor-backend.herokuapp.com/v1/videos/upload'
  // upload_url: 'http://localhost:3000/v1/videos/upload'
  authnetication_url: 'http://ec2-52-66-30-76.ap-south-1.compute.amazonaws.com:3000/v1/user/authenticate',
  signup_url: 'http://ec2-52-66-30-76.ap-south-1.compute.amazonaws.com:3000/v1/user/signup'
};
