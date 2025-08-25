"use client";

export default function ResumeButton() {
  const handleOpenPDF = () => {
    window.open("/files/Resume_AndreaNaranjoLima.pdf", "_blank");
  };

  return (
    <button
      onClick={handleOpenPDF}
      className="
        px-5 py-2
        bg-accent-primary
        text-text-primary
        font-heading
        rounded-2xl
        shadow-md
        transition
        duration-200
        hover:bg-accent-hover
        focus:outline-none
        focus:ring-2
        focus:ring-accent-secondary
      "
    >
      View Full R&#233;sum&#233;
    </button>
  );
}
