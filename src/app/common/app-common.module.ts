import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        MyFilterPipe
    ],
    exports: [
      CommonModule,
      MyFilterPipe
    ]
  })
  export class AppCommonModule { }
