path = require('path')

module.exports =
    entry:
        app: './src/index'

    output:
        path: path.resolve __dirname, './dist'
        filename: 'index.js'

        library: 'vueThree'
        libraryTarget: 'umd'

    externals:
        three:
            commonjs: "three"
            commonjs2: "three"
            amd: "three"
            root: "THREE"

    resolve:
        extensions: ['.js', '.json', '.coffee']

    module:
        rules: [
            test: /\.coffee$/
            loader: 'coffee-loader'
        ]
