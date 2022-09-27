"use strict";

(function () {
  'use strict';

  var validation = new JustValidate('#contact-form', {
    errorFieldCssClass: 'is-invalid'
  });
  validation.addField('#name', [{
    rule: 'minLength',
    value: 3,
    errorMessage: 'Please Let me know who you are'
  }, {
    rule: 'maxLength',
    value: 30
  }, {
    rule: 'required',
    errorMessage: 'Please Let me know who you are'
  }]).addField('#email', [{
    rule: 'required',
    errorMessage: 'Please let me know how to contact you'
  }, {
    rule: 'email',
    errorMessage: 'Email is invalid'
  }]).addField('#subject', [{
    rule: 'minLength',
    value: 6
  }, {
    rule: 'maxLength',
    value: 40
  }, {
    rule: 'required',
    errorMessage: 'Please Let me know what this is about'
  }]).addField('#message', [{
    rule: 'minLength',
    value: 3,
    errorMessage: 'Please tell me more'
  }, {
    rule: 'required',
    errorMessage: 'Please Let me know how I can help'
  }]).onSuccess(function (event) {
    console.log('Validation passes and form submitted', event);
  });
})();
//# sourceMappingURL=contact.js.map
