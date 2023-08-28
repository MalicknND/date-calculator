// convert today date to input date format
const today = new Date().toISOString().split('T')[0];

// permet de récupérer l'élément HTML avec l'id start_date et de lui attribuer la valeur de la date du jour
start_date.value = today;
start_date.min = today; // permet de définir la date minimum à la date du jour

// Tomorow date calc
let tomorrow = new Date();
// permet d'avoir la date de demain
tomorrow.setDate(tomorrow.getDate() + 1);

//Convert to input format
let tomorowFormat = tomorrow.toISOString().split('T')[0];
end_date.value = tomorowFormat;
end_date.min = tomorowFormat;


start_date.addEventListener('change',  (e)=> {
    let day = new Date(e.target.value);
    if (end_date.value < start_date.value){
        // permet de définir la date minimum à la date du jour
        day.setDate(day.getDate() + 1);
      
        end_date.value = day.toISOString().split('T')[0];

    }
});
