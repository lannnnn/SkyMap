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
        },
        '/light': {
          target: 'https://www.lightpollutionmap.info',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/light': '/'
          }
        },
        '/local': {
          target: 'http://localhost:3000/',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/local': '/'
          }
        },
        '/data': {
          target: 'http://localhost:3001/',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/data': '/'
          }
        },
        '/busi': {
          target: 'http://localhost:3002/',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/busi': '/'
          }
        },
        '/adapt': {
          target: 'http://localhost:3003/',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/adapt': '/'
          }
        },
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  };
