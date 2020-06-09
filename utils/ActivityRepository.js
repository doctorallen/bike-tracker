class ActivityRepository {
  constructor() {
    this.activities = [];
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  getActivities() {
    return this.activities;
  }
}

module.exports = ActivityRepository;
