function send() {
    let lastSent = parseInt(localStorage.getItem('contact-last-sent'));
    let statusElement = document.getElementById('contact-status');
    
    let sendMail = function() {
      var nameElement = document.getElementById('contact-name');
      var emailElement = document.getElementById('contact-email');
      var messageElement = document.getElementById('contact-message');

      var messageHTML = messageElement.value;

      var params = {
        'from_name': nameElement.value,
        'from_email': emailElement.value,
        'message_html': messageHTML
      };
  
      let serviceId = 'gmail_fgc';
      let templateId = 'template_TCzXplGq';
      

      emailjs.send(serviceId, templateId, params)
        .then(function(response) {
          statusElement.innerText = 'A message has been sent to our team! We will review your message soon!'
        }, function(error) {
          statusElement.innerText = 'Could not send a message... Please try again later!'
          ;
        });
      }

    if (isNaN(lastSent) || Date.now() > lastSent + 600000) {
      sendMail();
      localStorage.setItem('contact-last-sent', Date.now());

      statusElement.innerText = 'Please wait...'
    } else {
      statusElement.innerText = 'Could not send a message... Please try again later!'
      localStorage.setItem('contact-last-sent', Date.now());

    }

  }