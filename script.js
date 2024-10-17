// List of PDF files and their descriptions
const pdfData = [
    { url: "file1.pdf", description: "Description for PDF 1" },
    { url: "file2.pdf", description: "Description for PDF 2" },
    { url: "file3.pdf", description: "Description for PDF 3" }
];

// Function to create a new PDF section
function addPDFSection(url, description) {
    const pdfList = document.getElementById("pdf-list");
    
    const section = document.createElement("div");
    section.classList.add("pdf-section");

    const link = document.createElement("a");
    link.href = url;
    link.textContent = "Download PDF";

    const desc = document.createElement("p");
    desc.textContent = description;

    section.appendChild(link);
    section.appendChild(desc);
    pdfList.appendChild(section);
}

// Adding the PDF sections dynamically
pdfData.forEach(pdf => {
    addPDFSection(pdf.url, pdf.description);
});
