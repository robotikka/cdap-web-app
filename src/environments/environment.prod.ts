const ec2url = 'http://ec2-35-154-98-108.ap-south-1.compute.amazonaws.com:3000/';
export const environment = {
  production: true,
  upload_url: ec2url + 'v1/videos/upload',
  authnetication_url: ec2url + 'v1/user/authenticate',
  signup_url: ec2url + 'v1/user/signup',
  module_url: ec2url + 'v1/modules',
  metaDataURL: ec2url + 'v1/metadata'
};
