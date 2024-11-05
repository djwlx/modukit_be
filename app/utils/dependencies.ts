import { getRootPath } from './path';

const initApp = async () => {
  const rootPath = getRootPath();
  console.log(rootPath);
};

export default initApp;
