
    // GSAP Animations on page load
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".hero h2", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".hero p", { duration: 1, x: 100, opacity: 0, delay: 0.8 });
    gsap.from(".hero button", { duration: 1, scale: 0.5, opacity: 0, delay: 1 });

    // Booking form submit handler
    document.getElementById("bookingForm").addEventListener("submit", function(e) {
      e.preventDefault(); 

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();
      const symptoms = document.getElementById("symptoms").value.trim();
      const appointmentDate = document.getElementById("appointmentDate").value;

      if (name && age && symptoms && appointmentDate) {
        alert(`Thank you, ${name}! Your appointment is booked.`);
        this.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
 