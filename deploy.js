#!/usr/bin/env node

const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment...');

// Deploy the dist folder to GitHub Pages
ghpages.publish('dist', {
  branch: 'gh-pages',
  message: 'Deploy website',
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
    console.log('Your website is now available at: https://hamzachoudhery01.github.io/');
  }
});