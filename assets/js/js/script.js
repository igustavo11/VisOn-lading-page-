const contactForm = document.getElementById('contact-form'), contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_olsy9tt','template_pdo3n22','#contact-form','So5ndDG7yeIIE9eM-' )
    .then(() =>{
        contactMessage.textContent = 'Email enviado ✅'
        setTimeout(()=>{
           contactMessage.textContent = '' 
        }, 5000)

        contactForm.reset()

    }, ()=>{
        contactMessage.textContent = 'Email não enviado error ❌'
    });
}

contactForm.addEventListener('submit', sendEmail)