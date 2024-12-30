function calculateAge() {
    // Get the selected date
    const birthDate = document.getElementById('birthDate').value;
    
    if (!birthDate) {
        alert("Please select a valid date!");
        return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    // Check if the selected date is in the future
    if (birth > today) {
        alert("The selected date is in the future. Please choose a valid birth date.");
        return;
    }

    // Calculate differences
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust for negative days or months
    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display results
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}