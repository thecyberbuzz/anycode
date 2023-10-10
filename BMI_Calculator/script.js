function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // convert to meters
    const bmi = weight / (height * height);

    const bmiValue = document.getElementById("bmiValue");
    const bmiCategory = document.getElementById("bmiCategory");

    if (isNaN(bmi)) {
        bmiValue.textContent = "Invalid Input";
        bmiCategory.textContent = "";
    } else {
        bmiValue.textContent = bmi.toFixed(2);

        if (bmi < 18.5) {
            bmiCategory.textContent = "Underweight";
        } else if (bmi < 24.9) {
            bmiCategory.textContent = "Normal Weight";
        } else if (bmi < 29.9) {
            bmiCategory.textContent = "Overweight";
        } else {
            bmiCategory.textContent = "Obese";
        }
    }
}
