import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const ivLength = 16;
const saltLength = 64;
const tagLength = 16;
const tagPosition = saltLength + ivLength;
const encryptedPosition = tagPosition + tagLength;

export class CryptBox {
    constructor(secret){
        this.secret = secret;
    }

    encrypt(value){
        if (value == null) {
            throw new Error('value must not be null or undefined');
        }

        const iv = crypto.randomBytes(ivLength);
        const salt = crypto.randomBytes(saltLength);
        const key = crypto.pbkdf2Sync(this.secret, salt, 100, 32, 'sha512');
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        const encrypted = Buffer.concat([cipher.update(String(value), 'utf8'), cipher.final()]);
        const tag = cipher.getAuthTag();
        
        return Buffer.concat([salt, iv, tag, encrypted]).toString('hex');
    }

    decrypt(value){
        if (value == null) {
            throw new Error('value must not be null or undefined');
        }

        const stringValue = Buffer.from(String(value), 'hex');
        const salt = stringValue.slice(0, saltLength);
        const iv = stringValue.slice(saltLength, tagPosition);
        const tag = stringValue.slice(tagPosition, encryptedPosition);
        const encrypted = stringValue.slice(encryptedPosition);
        const key = crypto.pbkdf2Sync(this.secret, salt, 100, 32, 'sha512');
        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        decipher.setAuthTag(tag);

        return decipher.update(encrypted) + decipher.final('utf8');
    }
}