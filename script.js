let button = document.getElementById('btn1');
button.addEventListener('click', () => { 
    const Panjang = parseInt(document.getElementById('Panjang').value);
    const Lebar = parseInt(document.getElementById('Lebar').value);
    const result = document.getElementById('output');
    let Panjang_status=false, Lebar_status=false ;

    if(Panjang === '' || isNaN(Panjang) || (Panjang <=0)){
        document.getElementById('Panjang_eror').innerHTML = 'Masukin panjang dalam skala yang benar !';
    }else{
        document.getElementById('Panjang_eror').innerHTML = '';
        Panjang_status=true ;
    }
    if(Lebar === '' || isNaN(Lebar) || (Lebar <=0)){
        document.getElementById('Lebar_eror').innerHTML = 'Masukin Lebar dalam skala yang benar !';

    }else{
        document.getElementById('Lebar_eror').innerHTML = '';
    }
    if(Panjang_status && Lebar_status){
        const bmi = (Panjang * Lebar).toFixed(2);
        if(bmi > 0){
            result.innerHTML = bmi;
        }
    }else{
        alert('terjadi eror tidak terduga');
        result.innerHTML = '';

    }
});
