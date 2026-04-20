// Tweaks panel
const ACCENTS = {
  sunset:     { clay: "#b5651d", clay2: "#c87138", ember: "#e07a3b", sun: "#f0a85c" },
  terracotta: { clay: "#a84a2a", clay2: "#c05538", ember: "#d86846", sun: "#e89169" },
  sage:       { clay: "#5a6b4a", clay2: "#6d8258", ember: "#8ca370", sun: "#b5cc97" },
  cobalt:     { clay: "#2d4a6b", clay2: "#3a6088", ember: "#5278a5", sun: "#7ea3c8" },
  copper:     { clay: "#8a4a2c", clay2: "#a45a36", ember: "#c27247", sun: "#d89265" },
};

function TweaksPanel({ state, onChange }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const h = (e) => {
      if (e.data?.type === '__activate_edit_mode') setActive(true);
      if (e.data?.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', h);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', h);
  }, []);

  if (!active) return null;

  const update = (patch) => {
    onChange(patch);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  return (
    <div className="tweaks">
      <div className="tweaks__head">
        <div className="tweaks__title">Tweaks</div>
        <div className="tweaks__sub">Live preview</div>
      </div>

      <div className="tweaks__group">
        <div className="tweaks__lbl">Accent</div>
        <div className="tweaks__swatches">
          {Object.entries(ACCENTS).map(([k, v]) => (
            <button
              key={k}
              className={`sw ${state.accent===k?'is-active':''}`}
              onClick={()=>update({ accent: k })}
              style={{ background: v.ember }}
              title={k}
            />
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <div className="tweaks__lbl">Density</div>
        <div className="tweaks__btns">
          {['airy','compact'].map(d => (
            <button
              key={d}
              className={`tb ${state.density===d?'is-active':''}`}
              onClick={()=>update({ density: d })}
            >{d}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <div className="tweaks__lbl">Hero variant</div>
        <div className="tweaks__btns">
          {['photo','typeforward','split'].map(d => (
            <button
              key={d}
              className={`tb ${state.heroVariant===d?'is-active':''}`}
              onClick={()=>update({ heroVariant: d })}
            >{d}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
window.TweaksPanel = TweaksPanel;
window.ACCENTS = ACCENTS;
