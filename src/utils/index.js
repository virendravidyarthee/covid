import moment from 'moment';

export function isEmpty(text) {
  if (text == null || text.trim() === '') {
    return true;
  } else {
    return false;
  }
}

export function isValidEmail(text) {
  // eslint-disable-next-line
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

export function isValidPhoneNumber(text) {
  // eslint-disable-next-line
  const reg = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

export function isNumeric(text) {
  if (isNaN(text)) {
    return false;
  } else {
    return true;
  }
}

export function isListEmpty(list) {
  if (list && list.length) {
    return false;
  } else {
    return true;
  }
}

export function getLastElementOf(list) {
  if (list && list.length) {
    return list.slice(-1)[0];
  } else {
    return null;
  }
}

export function getCurrentDate() {
  return new Date().getDate();
}

export function getCurrentMillis() {
  return Date.now();
}

export function hexToRgbA(hex, alpha) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + // eslint-disable-line no-bitwise
      `,${alpha})`
    );
  }
  throw new Error('Bad Hex');
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomColor = () =>
  // eslint-disable-next-line no-bitwise
  ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

export const truncate = (input, truncateAfter) => {
  if (input.length > truncateAfter) {
    return input.toString().substring(0, truncateAfter) + '...';
  } else {
    return input;
  }
};

export const getLastNDays = n => {
  return Array.from({ length: n }, (_, i) => {
    return moment().subtract(i, 'days');
  });
};

export const getNthDay = n => {
  return moment().add(n, 'days');
};
