document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const rollno = document.getElementById('student-rollno').value;
    const department = document.getElementById('student-department').value;

    alert(`Thank you, ${name}! Your details have been submitted. We will contact you at ${email}.\nRoll No: ${rollno}\nDepartment: ${department}`);

    // Reset the form after submission
    document.getElementById('student-form').reset();
});
