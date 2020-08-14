const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

/* generating images in the section */
function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="./images/img-${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View</button>
      </div>
    </div>
    `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length: 20 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

/* enlarge overlay by clicking view button */

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;

  overlay.classList.add("open");
}

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

/* close button */
function close() {
  overlay.classList.remove("open");
}

overlayClose.addEventListener("click", close);
