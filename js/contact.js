const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("show");
}

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  hamburger.classList.remove("active");
  overlay.classList.remove("show");
});


function sendMail(e) {
  e.preventDefault();

  const name = document.querySelector('[name="Full Name"]').value;
  const email = document.querySelector('[name="Email"]').value;
  const subject = document.querySelector('[name="Subject"]').value;
  const message = document.querySelector('[name="Message"]').value;

  const mailSubject = encodeURIComponent("New Contact: " + subject);

  const mailBody = encodeURIComponent(
    `Dear Daisenko Team,

    You have received a new message from your website.

    Full Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}

    Best regards,
    ${name}`
  );

  window.location.href = `mailto:daisenkohero@gmail.com?subject=${mailSubject}&body=${mailBody}`;
}
