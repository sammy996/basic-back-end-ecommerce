const connection = require('../database/connection');

module.exports = {
  async index (request, response) {
    const product = await connection('product').select('*');
    return response.json(product);
  },
  
  
  async create(request, response) {
    const { id,name, description, price } = request.body;

  await connection('product').insert({
    id,
    name,
    description,
    price,
  });
  
  return response.json(body);
  },

  async delete(request, response) {
    const { id } = request.params;
   

    const product = await connection('product')
      .where('id', id)
      .select('id')
      .first();
    
    if (product.id !== id) {
      return response.status(401).json({ error: 'Operação não permitida.'})
    }  
    await connection('profile')
      .where('id', id)
      .delete();

    return response.json(204).send()
  }
};