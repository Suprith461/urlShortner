import crypto from 'crypto';

export default function generateShortUrl(longUrl){
    const hash = crypto.createHash("md5").update(longUrl).digest('hex')
    return hash.toString().slice(0,6)
}