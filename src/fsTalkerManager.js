const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, 'talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);    
    } catch (error) {
      return null;  
    }
};

const writeFile = async (newFile) => {
  await fs.writeFile(filePath, JSON.stringify(newFile));
};

module.exports = { readFile, writeFile };
