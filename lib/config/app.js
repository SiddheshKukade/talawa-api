module.exports = {
  env: process.env.NODE_ENV,
  colorize_logs: process.env.COLORIZE_LOGS,
  log_level: process.env.LOG_LEVEL,
  defaultLocale: 'en',
  supportedLocales: ['hi', 'en', 'zh', 'fr', 'sp'],
};
//returns a object showing the configuration for the with the params for the .env file 
