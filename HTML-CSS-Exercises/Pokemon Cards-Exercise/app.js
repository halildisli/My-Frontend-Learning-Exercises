// Türkiye Hakkında Genel Bilgiler
// UluslarArası Adı: Republic of Turkey
// Para Birimi : Turkish lira
// Resmi Dili : Turkish

const asyncGet= async ()=>{ 
    const response = await fetch("https://restcountries.com/v3.1/name/usa"); 
    const veri = await response.json();
    const finalVeri=veri[0];
    let uluslararasiAdi=finalVeri.name.official;
    let paraBirimi=finalVeri.currencies.USD.name;
    let paraBirimiIsaret=Object.values(finalVeri.currencies)[0].symbol;
    // let paraBirimiIsaret=finalVeri.currencies.USD.symbol;
    let resmiDili=finalVeri.languages.eng;
    let kita=finalVeri.region;
    console.log(`
Amerika Hakkında Genel Bilgiler
Uluslarası Adı : ${uluslararasiAdi}
Para Birimi : ${paraBirimi}
Para Birimi Sembolu : ${paraBirimiIsaret}
Resmi Dili : ${resmiDili}
Bulunduğu Kıta : ${kita}`);
};
asyncGet();

