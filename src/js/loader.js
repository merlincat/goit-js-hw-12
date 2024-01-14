import { loader } from './refs';
export const showLoader = () => {
  loader.style.display = 'block';
  loader.style.visibility = 'visible';
};
export const hideLoader = () => {
  loader.style.display = 'none';
  loader.style.visibility = 'hidden';
};
