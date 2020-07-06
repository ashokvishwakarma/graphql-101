const { resolve } = require('path');

module.exports = {
  paths: function (paths, env) {        
    console.log(paths);
    paths.appPublic = resolve(__dirname, 'apps/app/public');
    paths.appHtml = resolve(__dirname, 'apps/app/public/index.html');
    paths.appIndexJs = resolve(__dirname, 'apps/app/src/index.tsx');
    paths.appSrc = resolve(__dirname, 'apps/app/src');
    paths.appTsConfig = resolve(__dirname, 'apps/app/tsconfig.app.json');
    paths.publicUrlOrPath = '/';
    paths.appTypeDeclarations = resolve(__dirname, 'apps/app/react-app.d.ts');
    return paths;
  },
}