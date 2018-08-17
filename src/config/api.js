const apiVersion = process.env.REACT_APP_API_KEY;
const apiRootHost = process.env.REACT_APP_API_ROOT_HOST;
const apiImgHost = process.env.REACT_APP_API_IMG_HOST;

export const API_ROOT = `${apiRootHost}/?apikey=${apiVersion}`;
export const API_IMG = `${apiImgHost}/?apikey=${apiVersion}`;