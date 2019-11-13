function send() {
    let lastSent = parseInt(localStorage.getItem('contact-last-sent'));
    let statusElement = document.getElementById('contact-status');
    
    let sendMail = function() {
      let nameElement = document.getElementById('contact-name');
      let emailElement = document.getElementById('contact-email');
      let messageElement = document.getElementById('contact-message');

      let messageHTML = messageElement.value;

      let params = {
        'from_name': nameElement.value,
        'from_email': emailElement.value,
        'message_html': messageHTML
      }

      let serviceId = 'gmail';
      let templateId = 'template_lpIHse0c';

      emailjs.send(serviceId, templateId, params)
        .then(function(response) {
          statusElement.innerText = 'A message has been sent to our team! We will review your message soon!'
        }, function(error) {
          statusElement.innerText = 'Could not send a message... Please try again later!'
        });
    }
    
    if (lastSent == null || Date.now() > lastSent + 600000) {
      sendMail();
      localStorage.setItem('contact-last-sent', Date.now());

      statusElement.innerText = 'Please wait...'
    } else {
      statusElement.innerText = 'Could not send a message... Please try again later!'
    }

  }