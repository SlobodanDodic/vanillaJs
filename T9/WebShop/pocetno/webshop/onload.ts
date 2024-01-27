/// <reference path="proto.ts" />

var korisnik: Korisnik;
window.onload = (): void => {
	let url: string = ... //preuzeti url
	if(url == ""){
		window.location.assign("../login/login.html");
	}
	
	//TODO preuzeti ime i prezime iz url-a. 

	//TODO ukoliko je ime pera onda se radi o maloprodajnom korisniku u suprotnome radi se o veleprodajnome korisniku
	
}