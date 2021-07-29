const cryto = require('crypto')

const secret = 'asdasdasdasdasdasdasdasdasdasdas'

class Encrypt{

    public encrypt = (name: string) => {
        console.log(name);
        try {
            const iv = Buffer.from(cryto.randomBytes(16))
            const cipher = cryto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv)
            let encrypted = cipher.update(name)
            encrypted = Buffer.concat([encrypted, cipher.final()])    
            return `${iv.toString('hex')}:${encrypted.toString('hex')}`

        } catch (error) {    
            return null 
        }
       
    
    }

    public decrypt = (name: string) => {
        try {
            const [iv, encrypted] = name.split(':')
            const ivBuffer = Buffer.from(iv, 'hex')
            const decipher = cryto.createDecipheriv('aes-256-cbc',Buffer.from(secret), ivBuffer)
            let content = decipher.update(Buffer.from(encrypted, 'hex'))
            content = Buffer.concat([content, decipher.final() ])
            return content.toString()

        } catch (error) {
            return null
        }

    }

}
export default Encrypt;
// const decrypted = decrypt('e5707fd51e489a400953e8ee88cd01fb:47b7c38599a6c98adc5a0f4b03938a4d')
// console.log(decrypted);