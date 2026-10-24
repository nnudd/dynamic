function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('ru-RU');
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('action-btn').addEventListener('click', () => {
  const output = document.getElementById('log-output');
  const entry = document.createElement('div');
  entry.textContent = `[${new Date().toLocaleTimeString()}] Статус: Динамический модуль активен | Репозиторий: homework-IIT`;
  output.prepend(entry);
});
