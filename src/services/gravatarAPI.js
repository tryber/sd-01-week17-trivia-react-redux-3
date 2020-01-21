import MD5 from 'crypto-js/md5';

const imageLink = (email) => {
  const hashReady = MD5(email);
  return `https://www.gravatar.com/avatar/${hashReady}`;
};

export default imageLink;
