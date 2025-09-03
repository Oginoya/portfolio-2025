// a11y対応アコーディオン（ボタン＋ARIA）
export function initAccordion(root = document) {
  root.querySelectorAll('[data-accordion]').forEach(item => {
    const btn = item.querySelector('button');
    const panel = item.querySelector('[data-acc-panel]');
    if (!btn || !panel) return;
    const id = panel.id || `acc-${Math.random().toString(36).slice(2, 8)}`;
    panel.id = id;
    btn.setAttribute('aria-controls', id);
    btn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;

    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });
}
