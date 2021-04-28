const { v4: uuidv4} = require('uuid');
const params = fileName =>{
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length -1];

  const imageParams = {
    Bucket: 'user-images-8a6e08d4-2ee3-4c13-8973-60a3a41646dd',
    Key: `${uuidv4()}.${fileType}`,
    Body:fileName.buffer
  };

  return imageParams;
}

module.exports = params;