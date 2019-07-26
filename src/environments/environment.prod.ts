const ec2URL = 'http://ec2-35-154-98-108.ap-south-1.compute.amazonaws.com:3000/';
export const environment = {
  production: true,
  upload_url: ec2URL + 'v1/videos/upload',
  // upload_url: 'https://v-tutor-backend.herokuapp.com/v1/videos/upload'
  authnetication_url: ec2URL + 'v1/user/authenticate',
  signup_url: ec2URL + 'v1/user/signup'
};
