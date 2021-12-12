const mongoose = require('mongoose')
const { Schema } = mongoose

const schemas = {}
const models = {}

const register = function (name, schema) {
  schemas[name] = schema
}

const loadModels = function () {
  for (const name in schemas) {
    const schema = schemas[name]
    const model = mongoose.model(name, schema)

    models[name] = model
  }
}

const getModels = function () {
  return models
}

const connect = async function (env) {
  await mongoose.connect(env.url)
}

module.exports = {
  register,
  loadModels,
  getModels,
  connect,

  Schema
}
