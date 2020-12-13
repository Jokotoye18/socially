const countryCodes = require('country-codes-list');

export const myCountryCodesObject = countryCodes.customList(
  'countryCode',
  '+{countryCallingCode}',
);
export const myCountryNameObject = countryCodes.customList(
  'countryCode',
  '{countryNameEn}',
);

export const codes = () => {
  return Object.entries(myCountryCodesObject);
};
export const names = () => {
  return Object.values(myCountryNameObject);
};
