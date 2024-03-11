module.exports = {
  apps: [
    {
      name: "portafolio_Manuel",
      script: "npm",
      args: "run dev",
      cron_restart: "59 23 * * *",
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 4321,
      },
      env_dev: {
        NODE_ENV: "development",
        PORT: 4321,
      },
    },
  ],
};
