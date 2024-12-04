document.getElementById("calc-btn").addEventListener("click", avgScore);

function avgScore() {
  let css1 = +document.getElementById("css1").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css2 = +document.getElementById("css2").value;
  let projectA = +document.getElementById("projectA").value;

  let average = (css1 + sp1 + sp2 + css2 + projectA) / 5;

  document.getElementById("output").innerHTML = average;
}
