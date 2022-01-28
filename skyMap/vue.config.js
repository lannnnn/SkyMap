// vue.config.js 
module.exports = {
    //baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: "mycli3",
    assetsDir: "assets",
    filenameHashing: false,  
    //   lintOnSave：{ type:Boolean default:true } 
    lintOnSave: true,
    // lintOnSave: process.env.NODE_ENV !== 'production',
    // runtimeCompiler: false,
    productionSourceMap: false,
   
    devServer: {
      host: "localhost",
      port: 8081, 
      https: false, // https:{type:Boolean}
      open: true, 
      // proxy: 'http://localhost:4000' 
   
      proxy: {
        '/map': {
            target: 'https://www.fourmilab.ch',
            ws: false,
            changeOrigin: true,
            pathRewrite: {
                '^/map': '/'
              }
        }
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  };
