const items = [
  {
    n: "01",
    title: "You're on the list",
    text: "Your account is created and confirmed — nothing else needed from you right now.",
  },
  {
    n: "02",
    title: "Broker connection opens",
    text: "We'll email you the moment it's your turn to connect a broker account.",
  },
  {
    n: "03",
    title: "Your dashboard goes live",
    text: "The preview below switches over to your real balance, trades, and stats.",
  },
];

export default function NextSteps() {
  return (
    <div className="surface rounded-xl p-6">
      <div className="mb-5 text-sm font-semibold">What&rsquo;s next</div>
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.n}>
            <span className="font-mono-tight text-2xl font-bold text-accent-2">
              {item.n}
            </span>
            <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-dim">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
