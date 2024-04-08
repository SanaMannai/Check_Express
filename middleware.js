// middleware.js

// Custom middleware to check working hours
const checkWorkingHours = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = date.getHours();
  
    // Check if it's a weekday (Monday to Friday) and between 9am and 5pm
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
      // If it's within working hours, proceed to the next middleware
      next();
    } else {
      // If it's outside working hours, display a message or redirect
      res.render('out-of-office');
    }
  };
  
  module.exports = { checkWorkingHours };
  