const GetMongoSchemaFromRequest = require("./src/mongodb/index");
const prettier = require("prettier");
const ProcessSchema = entity => {
  try {
    const content = GetMongoSchemaFromRequest(entity);
    return prettier.format(content);
  } catch (error) {
    return { error };
  }
};
module.exports = { ProcessSchema };
