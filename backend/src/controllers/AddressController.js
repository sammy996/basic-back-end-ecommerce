const connection = require('../database/connection');

module.exports = {
  async index (request, response) {
    const addresses = await connection('address').select('*');
    return response.json(addresses);
  },
  async create (request, response) {
    const { rua, numero, bairro, city, uf } = request.body;
    const profile_id = request.headers.authorization;

    const [id] = await connection('address').insert({
      rua,
      numero,
      bairro,
      city,
      uf,
      profile_id,
    });

    return response.json({id})
  },
  async delete(request, response) {
    const { id } = request.params;
    const profile_id = request.headers.authorization;

    const addresses = await connection('address')
      .where('id', id)
      .select('profile_id')
      .first();
    
    if (addresses.profile_id !== profile_id) {
      return response.status(401).json({ error: 'Operação não permitida.'})
    }  
    await connection('address')
      .where('id', id)
      .delete();

    return response.json(204).send()
  }
};