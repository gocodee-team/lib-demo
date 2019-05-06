import { Component, OnInit, Inject } from '@angular/core';
import { GocodeeLibDemoService } from './gocodee-lib-demo.service';

@Component({
  selector: 'gl-gocodee-lib-demo',
  template: './gocodee-lib-demo.component.html',
  styles: ['./gocodee-lib-demo.component.scss']
})
export class GocodeeLibDemoComponent implements OnInit {

  constructor(private toast: GocodeeLibDemoService) { }

  ngOnInit() {
  }

}
