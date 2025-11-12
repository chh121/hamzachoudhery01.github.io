#!/usr/bin/env node

const ghpages = require('gh-pages');
const path = require('path');

// Deploy the dist folder to GitHub Pages
ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/hamzachoudhery01/hamzachoudhery01.github.io.git',
  user: {
    name: 'hamzachoudhery01',
    email: 'hamzashoukat157@gmail.com'
  }
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
  }
});