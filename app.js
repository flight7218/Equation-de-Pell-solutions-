function estCarreParfait(n) {
  const racine = Math.sqrt(n);
  return racine === Math.floor(racine);
}

function produitMatrice(A, B) {
  return [
    [
      A[0][0] * B[0][0] + A[0][1] * B[1][0],
      A[0][0] * B[0][1] + A[0][1] * B[1][1]
    ],
    [
      A[1][0] * B[0][0] + A[1][1] * B[1][0],
      A[1][0] * B[0][1] + A[1][1] * B[1][1]
    ]
  ];
}

function resoudrePell() {
  const d = parseInt(document.getElementById("d").value);
  const nbr = parseInt(document.getElementById("nbr").value);
  const resultats = document.getElementById("resultats");
  resultats.innerHTML = "";

  if (isNaN(d) || isNaN(nbr) || d < 2 || estCarreParfait(d)) {
    resultats.innerHTML = "<p style='color:red;'>Veuillez entrer une valeur de d valide (non carré parfait ≥ 2).</p>";
    return;
  }

  let y = 0, x = 0;
  do {
    y++;
    const test = 1 + d * y * y;
    x = Math.sqrt(test);
  } while (!Number.isInteger(x));

  // Matrice fondamentale
  const t = [
    [x, y * d],
    [y, x]
  ];

  // Vecteur initial
  let st = [
    [x, 0],
    [y, 0]
  ];

  const solutions = [];
  for (let k = 0; k < nbr; k++) {
    const prod = produitMatrice(t, st);
    solutions.push(`(${prod[0][0]}, ${prod[1][0]})`);

    // Mise à jour du vecteur colonne st
    st = [
      [prod[0][0], 0],
      [prod[1][0], 0]
    ];
  }

  resultats.innerHTML = "<strong>Solutions :</strong><br>" + solutions.join("<br>");
}
