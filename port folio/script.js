document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can use AJAX to send the form data to a server
    alert('Form submitted!');
});
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path/to/your/resume.pdf' with the correct path to your resume file
    var resumePath = 'D:\\codings\\port folio\\Resume.pdf';

    // Create a link element
    var link = document.createElement('a');

    // Set the href attribute to the path of the resume file
    link.href = resumePath;

    // Set the download attribute with the desired file name
    link.download = 'Resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});

