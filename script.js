document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("multi-step-form");
    const fieldsets = form.querySelectorAll("fieldset");
    const nextButtons = form.querySelectorAll(".next");
    const prevButtons = form.querySelectorAll(".prev");
    const submitButton = form.querySelector("button[type='submit']");
  
    let currentStep = 0;
  
    function showStep(step) {
      fieldsets.forEach((fieldset, index) => {
        if (index === step) {
          fieldset.style.display = "block";
        } else {
          fieldset.style.display = "none";
        }
      });
      
      // Show or hide submit button based on current step
      if (step === fieldsets.length - 1) {
        submitButton.style.display = "block";
      } else {
        submitButton.style.display = "none";
      }
    }
  
    function goToStep(step) {
      currentStep = step;
      showStep(currentStep);
    }
  
    nextButtons.forEach(button => {
      button.addEventListener("click", function() {
        if (currentStep < fieldsets.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });
  
    prevButtons.forEach(button => {
      button.addEventListener("click", function() {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle form submission here
      // You can send form data using AJAX or perform any other action
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log("Form submitted!");
      
      // Reset the form
      form.reset();
      // Return to the first step
      goToStep(0);
    });
  });
  