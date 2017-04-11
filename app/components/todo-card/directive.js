import template from './template.html'
import app from '../../app.module.js'
import controller from './controller.js'

app.directive("todoCard", function(){
  return {
    template,
    restrict: "E",
    scope: {
      data: "=",
      columnNumber: "="
    },
    controller,
    controllerAs: "card",
    bindToController: true
  }
});
