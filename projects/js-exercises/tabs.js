// WAI-ARIA Tabs（左右矢印、Home/End対応）
export function initTabs(root = document) {
  const tablists = root.querySelectorAll('[role="tablist"]');
  tablists.forEach(list => {
    const tabs = list.querySelectorAll('[role="tab"]');
    const panels = root.querySelectorAll(`#${list.id}-panel [role="tabpanel"]`);

    const activate = (tab) => {
      tabs.forEach(t => (t.ariaSelected = 'false', t.tabIndex = -1));
      panels.forEach(p => p.hidden = true);

      tab.ariaSelected = 'true';
      tab.tabIndex = 0;
      const panel = root.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
      tab.focus();
    };

    list.addEventListener('click', (e) => {
      const tab = e.target.closest('[role="tab"]');
      if (tab) activate(tab);
    });

    list.addEventListener('keydown', (e) => {
      const current = list.querySelector('[role="tab"][aria-selected="true"]');
      const arr = Array.from(tabs);
      let idx = arr.indexOf(current);
      if (e.key === 'ArrowRight') idx = (idx + 1) % arr.length;
      else if (e.key === 'ArrowLeft') idx = (idx - 1 + arr.length) % arr.length;
      else if (e.key === 'Home') idx = 0;
      else if (e.key === 'End') idx = arr.length - 1;
      else return;
      activate(arr[idx]);
      e.preventDefault();
    });

    // 初期表示
    activate(tabs[0]);
  });
}
