module.exports = {
  apps : [{
    name: "rest-api-server",
    script: "./dist/main.js",
    instances: 4,
    exec_mode: "cluster",
    env: {
        NODE_ENV: "production",
    }
  }],
  deploy : {
    production : {
      user : 'tyche0421',
      host : [
              {
                host : 'chaewoo.synology.me',
                port : '11170'
              }
            ],
      ref  : 'origin/main',
      repo : 'https://github.com/MoonChaeWoo/rest-api-server.git',
      path : '/var/services/homes/tyche0421/rest-api-server',
      'pre-deploy-local': '',
      'post-deploy' : 'exec /bin/bash && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
