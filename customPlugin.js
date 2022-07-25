const pluginName = 'CustomPlugin'

class CustomPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack compiler is running')
    })
  }
}

module.exports = CustomPlugin