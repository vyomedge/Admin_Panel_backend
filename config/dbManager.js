// config/dbManager.js
const mongoose = require('mongoose');
const blogSchema = require('../models/Blog');

const connections = {};

const getPanelDb = (panel) => {
  if (!panel) throw new Error('Panel is required');

  const dbName = {
    event: 'Poornam-event',
    travel: 'Travel',
    photography: 'Photography',
    catering: 'Catering',
  }[panel];

  if (!dbName) throw new Error('Invalid panel');

  if (connections[dbName]) return connections[dbName];

  const db = mongoose.connection.useDb(dbName, { useCache: true });
  const Blog = db.model('Blog', blogSchema); // 🆕 register Blog model

  connections[dbName] = { Blog };
  return connections[dbName];
};

module.exports = getPanelDb;
