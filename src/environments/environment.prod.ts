// const ec2url = 'http://ec2-13-127-182-254.ap-south-1.compute.amazonaws.com:3000/';
const ec2url = 'http://15.206.33.173:3000/';
export const environment = {
  production: true,
  upload_url: ec2url + 'v1/videos/upload',
  authnetication_url: ec2url + 'v1/user/authenticate',
  signup_url: ec2url + 'v1/user/signup',
  module_url: ec2url + 'v1/modules',
  metaDataURL: ec2url + 'v1/metadata',
  medaDataSearchURL: ec2url + 'v1/metadata/search',
  commentsURL: ec2url + 'v1/videos/update-comments',
  reviewVideoURL: ec2url + 'v1/videos/get-by-status',
  updateStatusURL: ec2url + 'v1/videos/update-status',
  updateTopicsURL: ec2url + 'v1/videos/update-topics'
};
