# LibDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Motivation

This project is a exist as a small demo for beginer to know how to write a Angular Library. In this library we will learn how to know how a native angular library work and learn how to use a JS lib inside an angular app.<br/>
In this demo I will use 'underscore' js lib to seperate particles in an array.

### Build Status

### Code Style

## Tech/Framework Used
Angular 7 

## Installation
Add this command to the terminal:<br/>
<code>npm install gocodee-lib-demo</code><br/>
Because in this library the 'underscore' lib is a peerDependencies so we must install it in main project with the command: <br/>
<code>npm install underscore</code>

## Tests
Unit test 
<code>ng test</code> via [Karma](https://karma-runner.github.io).<br/>
End-to-end test
<code>ng e2e</code> via [Protractor](http://www.protractortest.org/).
 
# How to use
In your project module:<br/>
  ```javascript
  import 'GocodeeLibDemoModule' from 'gocodee-lib-demo'
  ...
  @NgModule({
  imports: [
    CommonModule
    GocodeeLibDemoModule.forRoot({ brand: "Some Configues"})
  ],
  ...
  ```
<br/>

In the component that will run the library, enter these codes:<br/>

```javascript
...
import { GocodeeLibDemoService } from 'gocodee-lib-demo';

...
export class StretchComponent implements OnInit {

  constructor(private toast: GocodeeLibDemoService) { 
    this.toast.sumValue(5,6);
  }
  
  ngOnInit() {
   ...
   this.toast.each(this.fruits,console.log);
  }
...
```
If you see an Error like : 
<code>No provider for ViewContainerRef</code><br/>
We could insert this line to the angular.json of your app to fix it
```javascript
...
 "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ludus-parallax",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
       -->  "preserveSymlinks": true,
...
```

## License
This project is a open source library of GOCODEE team in onder to serve for the education. All the example in this project is free to use for education purpose.
