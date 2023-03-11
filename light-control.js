const lightSelect = document.getElementById('light-select');
const lightColor = document.getElementById('light-color');

lightSelect.addEventListener('change', function() {
  const selectedLight = document.getElementById(lightSelect.value);
  selectedLight.style.backgroundColor = lightColor.value;
});

lightColor.addEventListener('change', function() {
  const selectedLight = document.getElementById(lightSelect.value);
  selectedLight.style.backgroundColor = lightColor.value;
});
