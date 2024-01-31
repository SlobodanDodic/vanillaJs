/// <reference path="proto.ts" />

var korisnik: Korisnik;
window.onload = (): void => {
  let url: string = window.location.search.substring(1);
  let ime = url.split("&")[0];
  let lozinka = url.split("&")[1];

  //preuzeti url
  if (url == "") {
    window.location.assign("../login/login.html");
  }

  //TODO preuzeti ime i prezime iz url-a.

  //TODO ukoliko je ime pera onda se radi o maloprodajnom korisniku u suprotnome radi se o veleprodajnome korisniku
};
