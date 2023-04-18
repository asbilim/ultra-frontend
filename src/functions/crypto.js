const crypto = require('crypto-js')




export function encrypt (data){
    const key = "lundimardimercredijeudivendredisamedidimancheplusunpetitcadeau"
    let encJson = crypto.AES.encrypt(JSON.stringify(data), key).toString();
     return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(encJson));

}

export function decrypt(data){
    const key = "lundimardimercredijeudivendredisamedidimancheplusunpetitcadeau"
    let decData;
    try{
        decData = crypto.enc.Base64.parse(data).toString(crypto.enc.Utf8);
    }
    catch{
        return null
    }

    return crypto.AES.decrypt(decData, key).toString(crypto.enc.Utf8);
}

export function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

export function addToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Text added to clipboard'))
      .catch((err) => console.error('Error adding text to clipboard:', err));
  }