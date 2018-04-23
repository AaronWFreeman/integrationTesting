'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://Tlonist:Chewbacca1@ds151809.mlab.com:51809/test-blog-app';
exports.PORT = process.env.PORT || 8080;
