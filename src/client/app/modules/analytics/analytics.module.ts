// angular
import { NgModule } from '@angular/core';

// lib
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';

// module
import { ANALYTICS_PROVIDERS } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    Angulartics2Module.forRoot([
      Angulartics2Segment
    ])
  ],
  providers: [
    ...ANALYTICS_PROVIDERS
  ]
})
export class AnalyticsModule {

}
