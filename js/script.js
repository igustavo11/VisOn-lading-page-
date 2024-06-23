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



const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrolly = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

    if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);
