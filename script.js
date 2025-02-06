document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active")

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
    })

    // Burger Animation
    burger.classList.toggle("toggle")
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter

      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      projectCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Form submission
  const contactForm = document.getElementById("contact-form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add your form submission logic here
    alert("Thank you for your message! I will get back to you soon.")
    contactForm.reset()
  })

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal")
  const revealElementsOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("revealed")
      }
    })
  }

  window.addEventListener("scroll", revealElementsOnScroll)
  revealElementsOnScroll()

  // Highlight timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")

  const revealTimelineItems = () => {
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (itemTop < windowHeight - 50) {
        item.classList.add("revealed")
      }
    })
  }

  window.addEventListener("scroll", revealTimelineItems)
  revealTimelineItems()
})

