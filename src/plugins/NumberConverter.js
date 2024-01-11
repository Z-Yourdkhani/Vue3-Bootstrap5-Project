
export default {
    install(app) {
      app.config.globalProperties.$filters = {
        toFarsiDigits(value) {
          const enToFaDigitsMap = {
            '0': '۰',
            '1': '۱',
            '2': '۲',
            '3': '۳',
            '4': '۴',
            '5': '۵',
            '6': '۶',
            '7': '۷',
            '8': '۸',
            '9': '۹'
          };
  
          return value.toString().replace(/\d/g, match => enToFaDigitsMap[match]);
        }
      };
    },
  };
