const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { user_id } = req.params;
        const { zip_code, street, number } = req.body;

        const user = await User.findByPk(user_id); // find by primary key

        if(!user) 
            return res.status(400).json({ error: 'User not found' });

        const address = await Address.create( {
            zipcode,
            street,
            number,
            user_id // passa pq tbm é uma coluna no banco
        });
        return res.json(address);
    }
}