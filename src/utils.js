
export const titleCase = (str = '') => {
  str = str.toLowerCase()
    .split(' ')
    .map(word => {
      if (word === 'of' || word === 'at') {
        return (word.charAt(0).toLowerCase() + word.slice(1));
      }
      return (word.charAt(0).toUpperCase() + word.slice(1));
    });
  return str.join(' ');
};

export const numberWithCommas = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const centsToRoundedDollar = value => Math.floor((value / 100.0));

export const onlyNumbers = (string = '') => string.replace(/[^0-9]/g, '');




