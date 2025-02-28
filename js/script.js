const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_w4sgkpw",
      "template_oxl5z94",
      "#contact-form",
      "3E_SzVJ59mdqqPJl0"
    )
    .then(
      () => {
        contactMessage.textContent = "Email enviado ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Email não enviado error ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

function backToTop() {
  document.documentElement.scrollTop = 0;
}
