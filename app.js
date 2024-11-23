document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the inputs
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const issuedDate = document.getElementById('issued-date').value;
    const returnDate = document.getElementById('return-date').value;

    // Calculate the number of days between the two dates
    const issued = new Date(issuedDate);
    const returned = new Date(returnDate);
    const timeDifference = returned - issued; // Time difference in milliseconds
    const days = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days

    // Calculate interest
    const interest = (principal * rate * days) / 36500; // Formula: (P * R * T) / 100

    // Calculate the final amount (Principal + Interest)
    const finalAmount = principal + interest;

    // Format the dates to "DD/MM/YYYY"
    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0'); // Add leading zero if needed
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
        const year = d.getFullYear();
        return `${day}/${month}/${year}`; // Return in "DD/MM/YYYY"
    };

    // Format both dates
    const formattedIssuedDate = formatDate(issuedDate);
    const formattedReturnDate = formatDate(returnDate);

    // Output the results
    document.getElementById('issued-output').innerText = formattedIssuedDate;
    document.getElementById('return-output').innerText = formattedReturnDate;
    document.getElementById('interest-output').innerText = `₹${interest.toFixed(2)}`;
    document.getElementById('final-amount-output').innerText = `₹${finalAmount.toFixed(2)}`;
});
