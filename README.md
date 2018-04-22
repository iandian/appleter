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

sync tools folder with angular seed project in 2018-4-21

http://npm.github.io/how-npm-works-docs/npm3/how-npm3-works.html

what is AoT
https://angular.io/guide/aot-compiler
https://mgechev.github.io/angular-seed/#how-to-start-with-aot-compilation

tslint.JSON    compile use
https://palantir.github.io/tslint/usage/tslint-json/

what is angular service worker and ngsw-config.json
https://angular.io/guide/service-worker-intro
https://angular.io/guide/service-worker-getting-started
https://angular.io/guide/service-worker-communications
