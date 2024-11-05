import fs from 'fs';

export const checkFile = (filePath: string) => {
  let isFile = false;
  let isDirectory = false;
  let isEmpty = true;
  try {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      isFile = true;
      isEmpty = false;
    } else if (stats.isDirectory()) {
      isDirectory = true;
      isEmpty = false;
    }
  } catch (err) {
    isEmpty = true;
  }
  return {
    isFile,
    isDirectory,
    isEmpty,
  };
};
