
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

photo.addEventListener("change", function () {
  const file = photo.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please select an image file.");
    photo.value = "";
    return;
  }

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
});

window.generate = function () {
  const prompt = document.getElementById("prompt").value.trim();
  const file = photo.files[0];

  if (!file && !prompt) {
    alert("Please select a photo or enter a prompt!");
    return;
  }

  status.textContent = "Your input is ready! AI generation service is not connected yet.";
};
