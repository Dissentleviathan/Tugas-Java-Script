function salam(){
    alert('Selamat Pagi');
}

let npm = "2125250072";
let umur = "20";
let status = "true";
let hobi = ['baca', 'ngoding'];
let mahasiswa = {
    nama:"Zega",
    umur:"20",
    hobi:['jalan-jalan', 'game']
};

document.getElementById('npm').innerHTML = '2125250072';
document.getElementById('umur').innerHTML = '20';
document.getElementById('status').innerHTML = 'true';
document.getElementById('hobi').innerHTML = hobi[0]+', '+hobi[1];

document.getElementById('mahasiswa').innerHTML = mahasiswa.nama+', '+mahasiswa.umur+', '+mahasiswa.hobi[0]+', '+mahasiswa.hobi[1];

hobi.forEach(tampilhobi);

function tampilhobi(item, index){
        console.log(item+""+index);
}

//function tampilhobi2(){
    for(let x in hobi){
        console.log(hobi[x]);
    }
//}

for(let y in mahasiswa){
    console.log(mahasiswa[y]);
}

let keterangan = "";
if(umur == 20){
    //console.log("remaja");
    keterangan = "remaja";
}else{
    //console.log("anak-anak atau orang tua");
    keterangan = "anak-anak atau orang tua";
}

