
import moment from 'moment-jalaali';

export default {
  install(app) {
    app.config.globalProperties.$convertToShamsi = (gregorianDate) => {
      return moment(gregorianDate, 'YYYY-MM-DD HH:mm').format('jYYYY-jMM-jDD HH:mm');
    };
  }
}