window.onload = function () {
  // * Primeri sa objektom *
  // -- let knjige --

  // NajProfitabilnija knjiga po žanru:
  document.getElementById("profit-btn").addEventListener("click", () => {
    let najprofitabilnijeKnjigePoZanru = {};

    for (let i = 0; i < knjige.length; i++) {
      let knjiga = knjige[i];

      if (
        !najprofitabilnijeKnjigePoZanru[knjiga.genre] ||
        knjiga.sold * knjiga.price > najprofitabilnijeKnjigePoZanru[knjiga.genre].totalProfit
      ) {
        najprofitabilnijeKnjigePoZanru[knjiga.genre] = {
          imeKnjige: knjiga.name,
          brojProdatih: knjiga.sold,
          cenaKnjige: knjiga.price,
          totalProfit: knjiga.sold * knjiga.price,
        };
      }
    }

    let result = "";

    for (let genre in najprofitabilnijeKnjigePoZanru) {
      let { imeKnjige, brojProdatih, cenaKnjige, totalProfit } = najprofitabilnijeKnjigePoZanru[genre];
      result += `<div>
                    <p>
                      Najprofitabilnija <b>${genre}</b> knjiga:<br> ${imeKnjige} sa ukupno prodatih ${brojProdatih} knjiga, 
                      cena knjige ${cenaKnjige}€, ukupni profit <b>${totalProfit.toFixed(2)}</b>€.
                    </p>
                </div>`;
    }

    document.getElementById("podaci").innerHTML = result;
  });

  // Ukupna zarada knjiga po žanru:
  document.getElementById("zarada-btn").addEventListener("click", () => {
    let totalEarnPerGenre = knjige.reduce((acc, knjiga) => {
      let existingGenre = acc.find((item) => item.name === knjiga.genre);
      let earn = knjiga.sold * knjiga.price;

      if (existingGenre) {
        existingGenre.totalEarn += earn;
      } else {
        acc.push({ name: knjiga.genre, totalEarn: earn });
      }

      return acc;
    }, []);

    let result = totalEarnPerGenre.map((single) => {
      return `<div>
                <p>Zarada u žanru <b>${single.name}</b> iznosi <b>${single.totalEarn.toFixed(2)}</b>€.</p>
              </div>`;
    });

    document.getElementById("podaci").innerHTML = result.join("");
  });

  // Ukupan broj prodatih knjiga po žanru:
  document.getElementById("broj-btn").addEventListener("click", () => {
    // OPCIJA 1:
    let brojUkupnoProdatihPoZanru = knjige.reduce((acc, knjiga) => {
      acc[knjiga.genre] = (acc[knjiga.genre] || 0) + knjiga.sold;
      return acc;
    }, {});

    let podaciDiv = document.getElementById("podaci");
    podaciDiv.innerHTML = "";

    for (let genre in brojUkupnoProdatihPoZanru) {
      podaciDiv.innerHTML += `Ukupan broj prodatih knjiga u žanru <b>${genre}</b> iznosi ${brojUkupnoProdatihPoZanru[genre]}.<br><br>`;
    }
  });

  // Knjige sa najmanjom prodajom po žanru:
  document.getElementById("najmanji-broj-btn").addEventListener("click", () => {
    let najmanjiBrojProdatihPoZanru = knjige.reduce((acc, knjiga) => {
      if (!acc[knjiga.genre] || knjiga.sold < acc[knjiga.genre].brojProdatih) {
        acc[knjiga.genre] = {
          imeKnjige: [knjiga.name],
          brojProdatih: knjiga.sold,
        };
      } else if (knjiga.sold === acc[knjiga.genre].brojProdatih) {
        acc[knjiga.genre].imeKnjige.push(knjiga.name);
      }
      return acc;
    }, {});

    let result = "";

    for (let genre in najmanjiBrojProdatihPoZanru) {
      let { imeKnjige, brojProdatih } = najmanjiBrojProdatihPoZanru[genre];
      let books = imeKnjige.join(", ");
      result += `<div>
                  <p>
                    Najmanji broj prodatih po <b>${genre}</b>:<br> ${books} sa ukupno prodatih ${brojProdatih}.
                  </p>
                </div>`;
    }

    document.getElementById("podaci").innerHTML = result;

    // use of for loop(
    // let najmanjiBrojProdatihPoZanru = {};

    // for (let i = 0; i < knjige.length; i++) {
    //   let knjiga = knjige[i];

    //   if (!najmanjiBrojProdatihPoZanru[knjiga.genre] || knjiga.sold < najmanjiBrojProdatihPoZanru[knjiga.genre].brojProdatih) {
    //     najmanjiBrojProdatihPoZanru[knjiga.genre] = {
    //       imeKnjige: [knjiga.name],
    //       brojProdatih: knjiga.sold,
    //     };
    //   } else if (knjiga.sold === najmanjiBrojProdatihPoZanru[knjiga.genre].brojProdatih) {
    //     najmanjiBrojProdatihPoZanru[knjiga.genre].imeKnjige.push(knjiga.name);
    //   }
    // }

    // let result = "";

    // for (let genre in najmanjiBrojProdatihPoZanru) {
    //   let { imeKnjige, brojProdatih } = najmanjiBrojProdatihPoZanru[genre];
    //   let books = imeKnjige.join(", ");
    //   result += `<div>
    //               <p>
    //                 Najmanji broj prodatih po <b>${genre}</b>:<br> ${books} sa ukupno prodatih ${brojProdatih}.
    //               </p>
    //             </div>`;
    // }

    // document.getElementById("podaci").innerHTML = result;
    // )
  });

  // * Primeri sa objektom *
  // -- let bolnice --

  // Procenat obolelih:
  document.getElementById("oboleli-btn").addEventListener("click", () => {
    let aktivnaBolnica = bolnice[0];

    function procentualnoObolelih(bolnica) {
      let brojObolelih = bolnica.pacijenti.filter((pacijent) => pacijent.pcrTest === "Pozitivan").length;
      let ukupanBrojPacijenata = bolnica.pacijenti.length;
      let procenatObolelih = (brojObolelih / ukupanBrojPacijenata) * 100;
      return procenatObolelih.toFixed(0);
    }

    let podaciDiv = document.getElementById("podaci");
    podaciDiv.innerHTML = `<p>
    Procenutalan broj obolelih u bolnici ${aktivnaBolnica.naziv} je ${procentualnoObolelih(aktivnaBolnica)}%
    </p>`;
  });

  // Procenat obolelih bez simptoma:
  document.getElementById("no-simptom-btn").addEventListener("click", () => {
    let hospital = "";
    let ukupnoPozitivnih = 0;
    let pozitivnihBezSimptoma = 0;

    bolnice.forEach((bolnica) => {
      bolnica.pacijenti.forEach((pacijent) => {
        hospital = bolnica.naziv;

        if (pacijent.pcrTest === "Pozitivan") {
          ukupnoPozitivnih++;
          if (pacijent.ostaliSimptomi.length === 0) {
            pozitivnihBezSimptoma++;
          }
        }
      });
    });

    let procenat = ((pozitivnihBezSimptoma / ukupnoPozitivnih) * 100).toFixed(0);

    let podaciDiv = document.getElementById("podaci");
    podaciDiv.innerHTML = `<p>
    Procenutalan broj obolelih u bolnici <b>${hospital}</b> koji nemaju simptome je: <b>${procenat}%</b>
    </p>`;
  });

  // Grad sa najvise pozitivnih:
  document.getElementById("grad-btn").addEventListener("click", () => {
    let pozitivniPoGradovima = {};

    bolnice.forEach((bolnica) => {
      // Ako grad već postoji u objektu, dodajemo broj pozitivnih pacijenata
      if (pozitivniPoGradovima[bolnica.grad]) {
        bolnica.pacijenti.forEach((pacijent) => {
          if (pacijent.pcrTest === "Pozitivan") {
            pozitivniPoGradovima[bolnica.grad]++;
          }
        });
      } else {
        // Ako grad ne postoji u objektu, postavljamo broj pozitivnih pacijenata na 1
        pozitivniPoGradovima[bolnica.grad] = 0;
        bolnica.pacijenti.forEach((pacijent) => {
          if (pacijent.pcrTest === "Pozitivan") {
            pozitivniPoGradovima[bolnica.grad]++;
          }
        });
      }
    });

    let gradSaNajvisePozitivnih = "";
    let maxPozitivnih = 0;

    for (let grad in pozitivniPoGradovima) {
      if (pozitivniPoGradovima[grad] > maxPozitivnih) {
        maxPozitivnih = pozitivniPoGradovima[grad];
        gradSaNajvisePozitivnih = grad;
      }
    }

    let podaciDiv = document.getElementById("podaci");
    podaciDiv.innerHTML = `<p>Grad sa najviše pozitivnih pacijenata je <b>${gradSaNajvisePozitivnih}</b>!</p>`;
  });

  // Pacijent sa najvecom temperaturom:
  document.getElementById("najvecaTemperatura").addEventListener("click", () => {
    let pacijentSaNajvecomTemperaturom = null;
    let najvecaTemperatura = -Infinity;
    let gradPacijenta = "";

    bolnice.forEach((bolnica) => {
      bolnica.pacijenti.forEach((pacijent) => {
        // Ako je temperatura pacijenta veća od trenutne najveće temperature, ažuriramo podatke
        if (pacijent.telesnaTemperatura > najvecaTemperatura) {
          najvecaTemperatura = pacijent.telesnaTemperatura;
          pacijentSaNajvecomTemperaturom = pacijent;
          gradPacijenta = bolnica.grad;
        }
      });
    });

    let podaciDiv = document.getElementById("podaci");
    if (pacijentSaNajvecomTemperaturom) {
      podaciDiv.innerHTML = `<p>Pacijent sa najvećom temperaturom je ${pacijentSaNajvecomTemperaturom.ime} ${pacijentSaNajvecomTemperaturom.prezime} iz grada ${gradPacijenta} sa temperaturom od ${najvecaTemperatura} stepeni.</p>`;
    } else {
      podaciDiv.innerHTML = "<p>Nema podataka o pacijentima.</p>";
    }
  });

  // * Primeri sa objektom *
  // -- let bolnice --

  // Najslabiji kandidat po instruktoru:
  document.getElementById("najslabijiKandidat").addEventListener("click", () => {
    let rezultati = {};

    // Iteracija kroz sve auto škole
    autoSkole.forEach((autoSkola) => {
      // Iteracija kroz sve ispite u auto školi
      autoSkola.ispiti.forEach((ispit) => {
        let instruktorJMBG = ispit.instruktor.jmbg;

        // Proveri da li je instruktor već u rezultatima
        if (!rezultati[instruktorJMBG] || ispit.brojBodova < rezultati[instruktorJMBG].najslabijiBrojBodova) {
          // Ažuriraj rezultate za instruktora
          rezultati[instruktorJMBG] = {
            instruktor: ispit.instruktor,
            najslabijiKandidat: {
              ime: ispit.imeKandidata,
              prezime: ispit.prezimeKandidata,
              jmbg: ispit.jmbgKandidata,
              brojBodova: ispit.brojBodova,
            },
            najslabijiBrojBodova: ispit.brojBodova,
          };
        }
      });
    });

    let rezultatHtml = "";

    // Formatiranje rezultata za ispis
    for (let instruktorJMBG in rezultati) {
      let rezultat = rezultati[instruktorJMBG];
      rezultatHtml += `<p>Najslabiji kandidat po instruktoru ${rezultat.instruktor.ime} ${rezultat.instruktor.prezime} je ${rezultat.najslabijiKandidat.ime} ${rezultat.najslabijiKandidat.prezime} sa ${rezultat.najslabijiBrojBodova} bodova.</p>`;
    }

    let podaciDiv = document.getElementById("podaci");
    podaciDiv.innerHTML = rezultatHtml;
  });

  // Najbolji kandidat u svim skolama:
  document.getElementById("najboljiKandidat").addEventListener("click", () => {
    let maxPoints = -Infinity;
    let instruktor = "";
    let kandidat = "";

    autoSkole.forEach((autoSkola) => {
      autoSkola.ispiti.forEach((ispit) => {
        if (ispit.brojBodova > maxPoints) {
          maxPoints = ispit.brojBodova;
          instruktor = ispit.instruktor.ime;
          kandidat = ispit.imeKandidata;
        }
      });
    });

    console.log(
      `Maksimalni broj poena u svim skolama je ostvario ${kandidat} kod instruktora ${instruktor} sa brojem bodova: ${maxPoints}`
    );
  });
};
