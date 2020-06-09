const moment = require('moment');

module.exports = {
  formatDataForGraph: (data, dataType) => {
    const formattedData = data.map((activity) => {
      const timestamp = moment(activity.date).format('x');
      return [parseInt(timestamp), parseInt(activity[dataType])];
    });
    return formattedData.sort((a, b) => {
      return a[0] - b[0];
    });
  },
};
