// import * as gulp from 'gulp';
// var symdest = require('gulp-symdest');
// const builder = require("electron-builder")
// const Platform = builder.Platform

// Promise is returned
// builder.build({
//   targets: Platform.WINDOWS.createTarget(["squirrel", "nsis"]),
//   config: {
//     directories: {
//       buildResources: 'dist/dev',
//       output: 'desktop/windows'
//     },
//   }
// })
  // .then(() => {
  //   // handle result
  // })
  // .catch((error) => {
  //   // handle error
  // })



// export = () => {
  // let src = [
    // 'dist/dev/**/*'
  // ];
  // return gulp.src(src, { base: 'dist/dev' })
    // .pipe(
      // builder.build({
        // targets: Platform.WINDOWS.createTarget(["squirrel", "nsis"]),
        // config: {
          // directories: {
            // buildResources: 'dist/dev',
            // output: 'desktop/windows'
          // },
        // }
      // })
    // );
// };


import * as gulp from 'gulp';
import * as util from 'gulp-util';
var symdest = require('gulp-symdest');
const builder = require("electron-builder")
const Platform = builder.Platform

export = () => {
  let src = [
    'dist/dev/**/*'
  ];
    return  builder.build({
        targets: Platform.WINDOWS.createTarget(),
        config: {
          directories: {
            buildResources: 'dist/dev',
            app: 'dist/dev',
            output: 'desktop/windows'
          },
        }
      })
  .catch((error) => {
    // handle error
const msg = error.message;
util.log('>>>>>>>> ', util.colors.red(msg));

  })
};