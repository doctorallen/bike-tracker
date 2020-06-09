const router = require('express').Router();
const { formatDataForGraph } = require('../utils/dataFormatter');
const ActivityRepository = require('../utils/ActivityRepository');

const ActivityRepo = new ActivityRepository();

// TODO: route for saving activity data
router.post('/activities', (req, res) => {
  const { mileage, duration, date } = req.body;

  if (!mileage) {
    return res.status(400).json({
      success: false,
      message: 'Mileage is required.',
    });
  }

  if (!duration) {
    return res.status(400).json({
      success: false,
      message: 'Duration is required.',
    });
  }

  if (!date) {
    return res.status(400).json({
      success: false,
      message: 'Date is required.',
    });
  }

  ActivityRepo.addActivity(req.body);
  res.json({
    activities: ActivityRepo.getActivities(),
    success: true,
  });
});

// TODO: route for getting activity data by duration
router.get('/graphs/duration', (req, res) => {
  const formattedData = formatDataForGraph(
    ActivityRepo.getActivities(),
    'duration'
  );
  res.json(formattedData);
});

// TODO: route for getting activity data by mileage
router.get('/graphs/mileage', (req, res) => {
  const formattedData = formatDataForGraph(
    ActivityRepo.getActivities(),
    'mileage'
  );
  res.json(formattedData);
});

module.exports = router;
