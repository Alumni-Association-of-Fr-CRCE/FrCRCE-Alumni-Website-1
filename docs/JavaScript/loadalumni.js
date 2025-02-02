function createAlumniCard(data) {
  return `<div class="swiper-slide">
            <img
              src="${data["img"]}"
              alt="${data["name"]}"
            />
            <h3>${data["name"]}</h3>
            <p>${data["batch"]}</p>
          </div>`;
}

async function loadAlumni() {
  const res = await fetch("./Data/alumni.json");
  const alumni = await res.json();
  let container = document.getElementById("notablealumni");
  for (let i = 0; i < alumni.length; i++)
    container.insertAdjacentHTML("beforeend", createAlumniCard(alumni[i]));
  // console.log(createAlumniCard(alumni[i]));
}

// loadAlumni();
