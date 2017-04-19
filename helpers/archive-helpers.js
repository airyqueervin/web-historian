var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // use node fs in some fashion to read the files from archive sites
  // apply the callback on those results
};

exports.isUrlInList = function(url, callback) {
  // take in the url.
  // check if the url exists in the list
    // if it does
      // return the url with the callbackc applied 
      // also do that error thing
};

exports.addUrlToList = function(url, callback) {
  // take in a url 
  // use FS write to write the file to the list or archived sites.
  // apply the callback to the url 
};

exports.isUrlArchived = function(url, callback) {
  // take a url 
  // check if it is archived
    // if it is
      // return true
    // else return false
};

exports.downloadUrls = function(urls) {
  // take a list of urls
  // use fs to read all the urls and return them 
};
