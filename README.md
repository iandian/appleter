issues:
  1: Failed to find target with hash string 'android-23' when build android
    https://github.com/NativeScript/NativeScript/issues/4004

    resolution:
    nativescript\src\App_Resources\Android\app.gradle add one line

        compileSdkVersion 25

  2: ERROR in ./app.aot.ts Module not found: Error: Can't resolve './native.module.ngfactory' in '/app/nativescript/app'
    https://github.com/NathanWalker/angular-seed-advanced/issues/406

    resolution:
    nativescript\package.json  update  "@ngtools/webpack": "1.7.4"

  3: Property 'payload' does not exist on type 'Action'.
    https://github.com/ngrx/platform/issues/31

  4: ./node_modules/.bin/gulp build.bundle.rxjs

  5: systemjs config defaultJSExtensions true so package will add .js extension and also set additionalPackages: ExtendPackages so other omit package can be found in there path

  6: first resolve npm start error, then resolve client error

  7: https://github.com/mgechev/angular-seed/wiki/Integration-with-AngularMaterial2
    https://github.com/Karasuni/angular-seed/commit/9993e924b909ec377cc1b59305bf697e83b38361

http://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html

https://github.com/sindresorhus/awesome-electron

typescript electron app
with angular
https://github.com/Eugeny/terminus
https://github.com/mgechev/ngrev
https://github.com/imolorhe/altair
https://github.com/bitwarden/desktop
https://github.com/stbui/angular-material-app

without angular
https://github.com/railsware/upterm
https://github.com/Microsoft/vscode
https://github.com/KokoIRC/koko
https://github.com/frankhale/toby
https://github.com/rhysd/Shiba
https://github.com/MayGo/tockler
https://github.com/wexond/wexond
https://github.com/matthew-matvei/freeman


what is AoT
https://angular.io/guide/aot-compiler
https://mgechev.github.io/angular-seed/#how-to-start-with-aot-compilation

tslint.JSON    compile use
https://palantir.github.io/tslint/usage/tslint-json/

what is angular service worker and ngsw-config.json
https://angular.io/guide/service-worker-intro
https://angular.io/guide/service-worker-getting-started
https://angular.io/guide/service-worker-communications


npm install cnpm -g --registry=http://registry.npm.taobao.org
cnpm install electron -g
https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/
sudo apt-get install libgtk2.0-0:i386


nativescript
https://github.com/NativeScript/sample-Groceries
https://github.com/DeviantJS/awesome-nativescript
https://github.com/NativeScript/nativescript-marketplace-demo
https://github.com/nativescript/sample-groceries
https://github.com/NativeScript/nativescript-sdk-examples-ng
https://developer.telerik.com/featured/getting-started-nativescript/
https://tryexcept.com/articles/2016/10/27/nativescript-example-step-by-step-windows-10.html
https://dzone.com/articles/8-steps-to-publish-your-nativescript-app-to-the-ap
https://docs.telerik.com/platform/appbuilder/nativescript/creating-your-ns-app/clone-from-sample-ns
