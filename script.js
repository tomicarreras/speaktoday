// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle")
const navMenu = document.getElementById("nav-menu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question")

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement
    const isActive = faqItem.classList.contains("active")

    // Close all other items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active")
    })

    // Toggle current item
    if (!isActive) {
      faqItem.classList.add("active")
    }
  })
})

// Form submission
const enrollmentForm = document.getElementById("enrollment-form")

enrollmentForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(enrollmentForm)
  const data = Object.fromEntries(formData)

  // Create email body
  const emailBody = `
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Taller: ${data.workshop}
Nivel: ${data.level}
Mensaje: ${data.message || "N/A"}
    `.trim()

  // Create mailto link
  const mailtoLink = `mailto:tu@email.com?subject=Nueva Inscripción - SpeakToday&body=${encodeURIComponent(emailBody)}`

  // Open email client
  window.location.href = mailtoLink

  // Reset form
  enrollmentForm.reset()

  // Show confirmation (optional)
  alert("Se abrirá tu cliente de correo para enviar la inscripción. ¡Gracias por tu interés!")
})

// Header shadow on scroll
const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  }
})
