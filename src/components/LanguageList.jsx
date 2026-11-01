export default function LanguageList({ items }) {
  return (
    <ul className="topic-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
