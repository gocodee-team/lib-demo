# LibDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

# Movtivation

This project is a exist as a small demo for beginer to know how to write a Angular Library.

# Build Status

# Code Style

# Tech/Framework Used
Angular 7 

# Installation
Add this command to the terminal:
<code>npm install gocodee-lib-demo</code>

# Tests
Unit test 
<code>ng test</code> via [Karma](https://karma-runner.github.io).
End-to-end test
<code>ng e2e</code> via [Protractor](http://www.protractortest.org/).
 
# How to use
In your project module:
<code>import 'GocodeeLibDemoModule' from 'gocodee-lib-demo'</code>
<code>
  ...
  @NgModule({
  imports: [
    CommonModule,
    GocodeeLibDemoModule.forRoot({ brand: "Some Configues"})
  ],
  ...
</code>

# License
This project is a open source library of GOCODEE team in onder to serve for the education. All the example in this project is free to use for education purpose.
