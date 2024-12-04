function mult2_of_3(a, b, c){
    var ar = [a, b, c];
    console.log(ar);
    m1 = Math.max(...ar);
    console.log(ar.indexOf(m1), m1);
    t = ar.splice(ar.indexOf(m1), 1);
    m2 = Math.max(...ar);
    console.log(ar);
    return m1 * m2;
}


function name_and_rank(name, rank = "Рядовой"){
    return name + " " + rank;
}

const form1 = document.getElementById("zadanie1");
const form2 = document.getElementById("zadanie2");

form1?.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form1);
    const numa =  Number(formData.get("numa"));
    const numb =  Number(formData.get("numb"));
    const numc =  Number(formData.get("numc"));
    const d = document.getElementById("output1");
    d.innerHTML = "Произведение двух максимальных чисел: " + mult2_of_3(numa, numb, numc);
});



form2?.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form2);
    let name = formData.get("name");
    let rank = formData.get("rank").toString();
    const d = document.getElementById("output2");
    d.innerHTML = rank.length === 0 ? "Ваше имя и ранг: " + name_and_rank(name) : "Ваше имя и ранг: " + name_and_rank(name, rank) ;
});




