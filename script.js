//your JS code here. If required.
const form = document.getElementById('userForm');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');

    // Enable submit button when checkbox is checked
    terms.addEventListener('change', function () {
        if (terms.checked) {

            // Validate all fields before auto-submitting
            if (form.checkValidity()) {
                submitBtn.disabled = false;
                // form.submit();   // <-- auto-submit
            } else {
                submitBtn.disabled = true;
                alert("Please fill in all required fields before accepting the terms.");
                terms.checked = false; // uncheck checkbox if validation fails
            }

        } else {
            submitBtn.disabled = true;
        }
    });