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

npm install jquery popper.js echarts asar
node_modules/.bin/asar list desktop/windows/win-unpacked/resources/app.asar

have to install wine 
check
https://www.electron.build/multi-platform-build#linux
https://wiki.winehq.org/Debian
still not work after install
so i decide to use docker file
docker pull electronuserland/builder:wine



nativescript
https://blog.johanneshoppe.de/2016/06/setting-up-android-emulators-for-nativescript-development/
https://github.com/NativeScript/setup-scripts/blob/master/native-script.ps1

after install android studio the emulator is in this path
C:\Users\%username%\AppData\Local\Android\sdk\tools

Missing emulator engine program for 'x86' CPU
open avd manager to create new avd, and select x86_64, not x86

set ANDROID_HOME  to  C:\Users\%username%\AppData\Local\Android\sdk\

> Could not resolve com.android.tools.build:gradle:3.0.1.
   > Could not get resource 'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/3.0.1/gradle-3.0.1.pom'.
      > Could not GET 'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/3.0.1/gradle-3.0.1.pom'.
         > sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
  
需要保存google.cer， chrome上点击google网站的secure, 选择certificate的details，然后copy to file 保存为google.cer文件
cmd run as administrator
keytool -importcert -file google.cer -alias google -keystore "C:\Program Files\Java\jdk1.8.0_131\jre/lib/security/cacerts" -storepass changeit

https://github.com/NativeScript/sample-Groceries
http://www.bubuko.com/infodetail-677924.html
https://github.com/DeviantJS/awesome-nativescript
https://stackoverflow.com/questions/32515336/how-debug-nativescript-code
https://github.com/NativeScript/nativescript-marketplace-demo
https://github.com/nativescript/sample-groceries
https://github.com/NativeScript/nativescript-sdk-examples-ng
https://developer.telerik.com/featured/getting-started-nativescript/
https://tryexcept.com/articles/2016/10/27/nativescript-example-step-by-step-windows-10.html
https://dzone.com/articles/8-steps-to-publish-your-nativescript-app-to-the-ap
https://docs.telerik.com/platform/appbuilder/nativescript/creating-your-ns-app/clone-from-sample-ns
https://docs.nativescript.org/tooling/debugging
https://docs.nativescript.org/tooling/visual-studio-code-extension

tns doctor

tns run android
tns debug android
如果已经打开emulator， 则运行
tns debug android --start

console.log("Hello, NativeScript!");

node --inspect=0.0.0.0:9229 myproject.js
node --inspect-brk=0.0.0.0:9229 myproject.js
chrome://inspect

ionic
https://github.com/ionic-team/ionic
https://github.com/Alexintosh/Awesome-Ionic
https://github.com/XueRainey/ionic2
https://github.com/aggarwalankush/ionic-mosum
https://github.com/jvitor83/angular-pwa-seed

