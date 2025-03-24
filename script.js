// Student grade evaluation system in JavaScript

// Function to evaluate student grade
function evaluateGrade() {
    // Get the student's grade from the input field
    let grade = document.getElementById("grade").value;

    // Check if the grade is empty
    if (grade === "") {
        // Display an error message
        document.getElementById("result").innerHTML = "Please enter a grade";
    } else {
        // Convert the grade to a number
        grade = parseInt(grade);

        // Check if the grade is a number
        if (isNaN(grade)) {
            // Display an error message
            document.getElementById("result").innerHTML = "Please enter a valid number";
        } else {
            // Check the grade and display the result
            if (grade >= 90) {
                document.getElementById("result").innerHTML = "A";
            } else if (grade >= 80) {
                document.getElementById("result").innerHTML = "B";
            } else if (grade >= 70) {
                document.getElementById("result").innerHTML = "C";
            } else if (grade >= 60) {
                document.getElementById("result").innerHTML = "D";
            } else {
                document.getElementById("result").innerHTML = "F";
            }
        }
    }
}