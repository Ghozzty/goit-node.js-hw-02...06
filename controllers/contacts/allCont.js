const { Contact } = require('../../models')


const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const {page , limit, favorite} = req.query;
    const skip = (page - 1) * limit;
    let options;

    if (favorite){
      options = {favorite: { $eq: true }};
    
    } else {
      options = {owner: _id};

    }
    
    const data = await Contact.find(options, '', { skip: skip, limit: Number(limit)}).populate('owner', '_id email');
    
    res.status(200).json(data)
    
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
