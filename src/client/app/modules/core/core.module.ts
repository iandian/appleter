// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NbAuthModule, NbDummyAuthProvider } from '@nebular/auth';
// module
import { SharedModule } from '../shared/index';
import { CORE_DIRECTIVES } from './directives/index';
import { CORE_PROVIDERS } from './services/index';
import { Config } from './utils/index';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';

interface ICoreModuleOptions {
  window?: any;
  console?: any;
}

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbDummyAuthProvider,
        config: {
          delay: 3000,
          login: {
            rememberMe: true,
          },
        },
      },
    },
  }).providers,
  AnalyticsService,
];

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    ...CORE_DIRECTIVES
  ],
  exports: [
    NbAuthModule,
    ...CORE_DIRECTIVES
  ],
  providers: [
    ...CORE_PROVIDERS,
  ]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and ConsoleService per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        ...configuredProviders
      ],
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
