// src/app/components/Hello.tsx
type HelloProps = {
  name?: string;
};

export function Hello({ name = "World" }: HelloProps) {
  return (
    <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
      👋 Hello, {name}!
    </p>
  );
}
