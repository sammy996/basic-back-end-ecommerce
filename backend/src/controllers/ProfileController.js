const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create (request, response) {
    const { full_name, nickname, email, phone } = request.body;
    const id = crypto.randomBytes(5).toString('HEX');
    await connection('profile').insert({
      id,
      full_name,
      nickname,
      email,
      phone,
    });
    return response.json({id});
  },
};