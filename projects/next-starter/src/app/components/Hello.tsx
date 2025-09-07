// src/app/components/Hello.tsx
type HelloProps = {
  name?: string;
  emoji?: string; // 👈 emoji props を追加
};

export function Hello({ name = "World", emoji = "👋" }: HelloProps) {
  return (
    <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
      {emoji} Hello, {name}!
    </p>
  );
}
