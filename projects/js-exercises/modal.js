// a11y対応モーダル（フォーカストラップ＋Escクローズ）
export function initModal(root = document) {
  const openers = root.querySelectorAll('[data-modal-open]');
  const closers = root.querySelectorAll('[data-modal-close]');
  const modals = root.querySelectorAll('[data-modal]');

  const trapFocus = (container, e) => {
    const focusables = container.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        last.focus(); e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus(); e.preventDefault();
      }
    }
  };

  const open = (id) => {
    const modal = root.querySelector(`[data-modal="${id}"]`);
    if (!modal) return;
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');
    modal.dataset.previousFocus = document.activeElement ? '1' : '';
    const first = modal.querySelector('[autofocus]') || modal.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
    first?.focus();
    const onKeydown = (e) => {
      if (e.key === 'Escape') close(modal);
      trapFocus(modal, e);
    };
    modal._keydown = onKeydown;
    document.addEventListener('keydown', onKeydown);
  };

  const close = (modal) => {
    modal.setAttribute('hidden', '');
    document.removeEventListener('keydown', modal._keydown);
  };

  openers.forEach(btn => btn.addEventListener('click', () => open(btn.dataset.modalOpen)));
  closers.forEach(btn => btn.addEventListener('click', () => {
    const modal = btn.closest('[data-modal]');
    if (modal) close(modal);
  }));
  modals.forEach(m => m.addEventListener('click', (e) => {
    if (e.target === m) close(m); // 背景クリックで閉じる
  }));
}
