
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");
const status = document.getElementById("status");

photo.addEventListener("change", function () {
  const file = photo.files[0];

  if (!file) return;

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    alert("Please select JPG, PNG or WEBP photo.");
    photo.value = "";
    preview.style.display = "none";
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

  status.textContent =
    "Your input is ready! AI generation service is not connected yet.";
};
