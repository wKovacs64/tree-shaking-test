import JSSHA from 'jssha/src/sha1';

const b = (text = 'foo') => {
  const sha1 = new JSSHA('SHA-1', 'TEXT');
  sha1.update(text);
  return sha1.getHash('HEX', { outputUpper: true });
};

export default b;
