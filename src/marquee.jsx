// Marquee — horizontal scroll of neighborhoods / credentials
function Marquee({ items, speed = 50 }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {list.map((item, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot">✳</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;
