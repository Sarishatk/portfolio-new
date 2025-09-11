function Socials() {
  const handleDownload = () => {
    const pdfPath = "/resume/SARISHACV.pdf"; // Place resume in public/resume/
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "SARISHACV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="ms-3">
      <h3 className="urbanist-heavy fs-2 mb-3 text-light">Socials</h3>

      <div className="d-flex flex-column gap-2">
        <a
          href="https://github.com/Sarishatk"
          target="_blank"
          className="fs-5 text-decoration-none text-light d-flex align-items-center social-link"
        >
          <i className="fa-brands fa-github me-2 fs-4"></i> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sarisha-krishna-42b296303/"
          target="_blank"
          className="fs-5 text-decoration-none text-light d-flex align-items-center social-link"
        >
          <i className="fa-brands fa-linkedin me-2 fs-4"></i> LinkedIn
        </a>
      </div>

      <hr className="my-4 border-light opacity-25" />

      <h3 className="urbanist-heavy fs-2 mb-3 text-light">Resume</h3>
      <button
        onClick={handleDownload}
        className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold"
      >
        <i className="fa-solid fa-file me-2"></i> Download CV
      </button>
    </div>
  );
}

export default Socials;
