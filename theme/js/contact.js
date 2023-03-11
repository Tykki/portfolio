
(function () {
    'use strict';

    const validation = new JustValidate('#contact-form', {
        // errorFieldCssClass: 'is-invalid',
      });
      const successMsg = document.querySelector('#successMsg')
      const form = document.querySelector('#contact-form')
      // form.addEventListener('submit', ()=>{
      //   success()
      // })
      // const success = () => {
      //   document.querySelector('#contact-form').style.display = 'none'
      // }
      validation
        .addField('#name', [
          {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Please Let me know who you are'
          },
          {
            rule: 'maxLength',
            value: 30,
          },
          {
            rule: 'required',
            errorMessage: 'Please Let me know who you are'
          },
        ])
        .addField('#email', [
          {
            rule: 'required',
            errorMessage: 'Please let me know how to contact you',
          },
          {
            rule: 'email',
            errorMessage: 'Email is invalid',
          },
        ])
        .addField('#subject', [
            {
              rule: 'minLength',
              value: 6,
            },
            {
              rule: 'maxLength',
              value: 40,
            },
            {
              rule: 'required',
              errorMessage: 'Please Let me know what this is about'
            }
        ])
        .addField('#message', [
          {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Please tell me more'
            },
            {
            rule: 'required',
            errorMessage: 'Please Let me know how I can help'
          },
        ])
        .onSuccess((event) => {
          console.log('Validation passes and form submitted', event);
          // submitted = true
        document.querySelector('#contact-form').style.display = 'none'
        form.submit()
          successMsg.style.display = 'block'
        });
}());
