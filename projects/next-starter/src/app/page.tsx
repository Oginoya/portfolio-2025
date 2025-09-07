// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "4rem 1rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 720 }}>
        <h1 style={{ fontSize: "2.25rem", lineHeight: 1.2, marginBottom: "1rem" }}>
          Hello Portfolio-2025 🚀
        </h1>
        <p style={{ opacity: 0.8, marginBottom: "1.5rem" }}>
          Next.js（App Router / TS）での最初のデプロイ。編集→push すると Vercel が自動で反映されます。
        </p>
        <a
          href="https://github.com/Oginoya/portfolio-2025"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: ".75rem 1rem",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            textDecoration: "none",
          }}
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}
