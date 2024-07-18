export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        className="ckeckbox"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span
        className="lists"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity}
        {"\t"}
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
