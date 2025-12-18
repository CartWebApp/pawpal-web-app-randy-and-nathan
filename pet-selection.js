const track = document.querySelector('.scroll-track');
const items = Array.from(track.children);

// Clone each item once so the list is doubled
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});
