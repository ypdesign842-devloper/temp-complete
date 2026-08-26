// Complete Care Production Client Interactive Engine
(function () {
  function init() {
    // 1. Mobile Menu Toggle & Accordions
    const mobileMenuBtn = document.querySelector('button[aria-controls="mobile-nav"]');
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener("click", function () {
        const isHidden = mobileNav.classList.contains("hidden");
        if (isHidden) {
          mobileNav.classList.remove("hidden");
          mobileNav.classList.add("block");
          mobileMenuBtn.setAttribute("aria-expanded", "true");
        } else {
          mobileNav.classList.remove("block");
          mobileNav.classList.add("hidden");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Global Click Delegation for Mobile Accordions
    document.addEventListener("click", function (e) { 
      const btn = e.target.closest('#mobile-nav button[aria-label*="Toggle"]');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest(".rounded-xl");
        const panel = parent ? parent.querySelector("div[class*='border-t']") : null;
        const icon = btn.querySelector("span");
        if (panel) {
          const isHidden = panel.classList.contains("hidden");
          if (isHidden) {
            panel.classList.remove("hidden");
            panel.classList.add("block");
            if (icon) icon.classList.add("rotate-45");
          } else {
            panel.classList.remove("block");
            panel.classList.add("hidden");
            if (icon) icon.classList.remove("rotate-45");
          }
        }
      }
    });

    // 2. Desktop Dropdowns Hover & Focus
    const navItems = document.querySelectorAll(".header-nav-item");
    navItems.forEach(function (item) {
      let timer;
      const dropdown = item.querySelector(".header-dropdown");
      if (!dropdown) return;

      item.addEventListener("mouseenter", function () {
        clearTimeout(timer);
        dropdown.classList.remove("hidden");
        dropdown.classList.add("block");
      });

      item.addEventListener("mouseleave", function () {
        timer = setTimeout(function () {
          dropdown.classList.remove("block");
          dropdown.classList.add("hidden");
        }, 150);
      });
    });

    // 3. FAQ Accordions
    const faqButtons = document.querySelectorAll("[data-faq-toggle]");
    faqButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".faq-chevron");
        const isOpen = content && !content.classList.contains("hidden");

        // Close others in same accordion
        const parent = this.closest(".faq-container") || document;
        parent.querySelectorAll("[data-faq-content]").forEach(function (c) {
          c.classList.add("hidden");
        });
        parent.querySelectorAll(".faq-chevron").forEach(function (i) {
          i.classList.remove("rotate-180");
        });

        if (!isOpen && content) {
          content.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        }
      });
    });

    // 4. Certificate Lightbox Modal
    const certCards = document.querySelectorAll("[data-cert-id]");
    const modal = document.getElementById("cert-lightbox-modal");
    const modalImg = document.getElementById("cert-modal-img");
    const modalTitle = document.getElementById("cert-modal-title");
    const modalBadge = document.getElementById("cert-modal-badge");
    const modalDesc = document.getElementById("cert-modal-desc");
    const modalRecipient = document.getElementById("cert-modal-recipient");
    const modalIssuer = document.getElementById("cert-modal-issuer");
    const modalClose = document.getElementById("cert-modal-close");

    if (certCards.length && modal) {
      certCards.forEach(function (card) {
        card.addEventListener("click", function () {
          const src = this.getAttribute("data-cert-src");
          const title = this.getAttribute("data-cert-title");
          const badge = this.getAttribute("data-cert-badge");
          const desc = this.getAttribute("data-cert-desc");
          const recipient = this.getAttribute("data-cert-recipient");
          const issuer = this.getAttribute("data-cert-issuer");

          if (modalImg) modalImg.src = src;
          if (modalTitle) modalTitle.textContent = title;
          if (modalBadge) modalBadge.textContent = badge;
          if (modalDesc) modalDesc.textContent = desc;
          if (modalRecipient) modalRecipient.textContent = recipient;
          if (modalIssuer) modalIssuer.textContent = issuer;

          modal.classList.remove("hidden");
          modal.classList.add("flex");
          document.body.style.overflow = "hidden";
        });
      });

      function closeModal() {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
        document.body.style.overflow = "";
      }

      if (modalClose) modalClose.addEventListener("click", closeModal);
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
      });
    }

    // 5. WhatsApp Appointment Form Submission Handler
    const forms = document.querySelectorAll("form.appointment-form");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = form.querySelector('[name="name"], [id*="name"]');
        const phoneInput = form.querySelector('[name="phone"], [id*="phone"]');
        const dateInput = form.querySelector('[name="date"], [id*="date"]');
        const serviceInput = form.querySelector('[name="service"], [id*="service"]');
        const conditionInput = form.querySelector('[name="condition"], [id*="condition"]');

        const name = nameInput ? nameInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const date = dateInput ? dateInput.value.trim() : "";
        const service = serviceInput ? serviceInput.value.trim() : "";
        const condition = conditionInput ? conditionInput.value.trim() : "";

        if (!name || !phone) {
          alert("Please provide your name and 10-digit mobile number.");
          return;
        }

        const msg = `Hello Complete Care, I would like to book a physiotherapy consultation.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}${date ? `%0A*Preferred Date:* ${encodeURIComponent(date)}` : ""}${service ? `%0A*Service:* ${encodeURIComponent(service)}` : ""}${condition ? `%0A*Condition:* ${encodeURIComponent(condition)}` : ""}`;
        window.open(`https://wa.me/918980676676?text=${msg}`, "_blank");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
