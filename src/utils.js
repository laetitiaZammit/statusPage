
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

export const regionTranslator = (regionId) => {
  switch (regionId) {
    case 'us-east-1':
      return 'Virginia';
    case 'us-west-1':
      return 'N. California';
    case 'us-west-2':
      return 'Oregon';
    case 'eu-west-1':
      return 'Ireland';
    case 'eu-central-1':
      return 'Frankfurt';
    case 'ap-southeast-1':
      return 'Singapore';
    case 'ap-southeast-2':
      return 'Sydney';
    case 'ap-northeast-1':
      return 'Tokyo';
    case 'sa-east-1':
      return 'Sao Paulo';
    default:
      return regionId;
  }
};

