
export default function HomePage() {
  return (
    <main style={{
      maxWidth: "800px",
      margin: "60px auto",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1>GapFinder AI</h1>
      <p>
        Discover your weak study areas and build a personalized revision plan.
      </p>
      <p>
        Upload your syllabus, notes, textbook chapters, and previous question papers
        to begin identifying topics that need more revision.
      </p>
      <a
        href="mailto:"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Start Your Study Journey
      </a>
    </main>
  );
}
