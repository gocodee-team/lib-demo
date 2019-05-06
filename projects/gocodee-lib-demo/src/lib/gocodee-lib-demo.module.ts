import { NgModule, ModuleWithProviders } from '@angular/core';
import { GocodeeLibDemoComponent } from './gocodee-lib-demo.component';
import { LibComponentComponent } from './lib-component/lib-component.component';
import { CommonModule } from '@angular/common';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';

@NgModule({
  declarations: [GocodeeLibDemoComponent, LibComponentComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [GocodeeLibDemoComponent]
})
export class GocodeeLibDemoModule { 
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: GocodeeLibDemoModule,
      providers: [
        GocodeeLibDemoService,
        { provide: 'config', useValue: config}
      ]
    };
  }
}
