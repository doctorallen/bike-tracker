const { readFileAsync, writeFileAsync } = require('./filesystem');
const path = require('path');

class ActivityRepository {
  constructor() {
    this.filePath = path.join(__dirname, '..', 'data', 'activities.json');

    // load up the data in the file currently, or set it to an empty array
    readFileAsync(this.filePath, 'utf8')
      .then((data) => {
        this.activities = JSON.parse(data);
      })
      .catch((err) => {
        this.activities = [];
      });
  }

  addActivity(activity) {
    this.activities.push(activity);
    this.saveActivities();
  }

  getActivities() {
    return this.activities;
  }

  getActivitesAsJSON() {
    return JSON.stringify(this.getActivities());
  }

  saveActivities() {
    writeFileAsync(this.filePath, this.getActivitesAsJSON(), 'utf8').catch(
      (err) => {
        console.error(err);
      }
    );
  }
}

module.exports = ActivityRepository;
