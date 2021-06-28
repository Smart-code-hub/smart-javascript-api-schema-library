const GetMongoSchemaFromRequest = entity => {
  return `
      
  const mongoose = require("mongoose");
  
  
  const ${entity.name.toLowerCase()}Schema = new mongoose.Schema(${JSON.stringify(
    {
      ...entity.entitySchema
    },
    null,
    4
  )});
  module.exports  = mongoose.model('${
    entity.name
  }', ${entity.name.toLowerCase()}Schema);`;
};
module.exports = GetMongoSchemaFromRequest;
