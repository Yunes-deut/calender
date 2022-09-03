 const paragraphEl=document.querySelector('p')
 const headMonthe=document.querySelector('h1');
 const heuteDatum= new Date();
 const dayEl=document.querySelector('.tagZahle')


    var monthe=[

            "January",
            "February",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Octo",
            "November",
            "December"
             ];

    let a = heuteDatum.getFullYear();
    let c = heuteDatum.getMonth();
    let b = heuteDatum.getDay();
    let d = heuteDatum.toDateString();

    headMonthe.innerText = monthe[c];
    paragraphEl.innerHTML = d;

    const lastDay = new Date(a,c+1,0).getDate();
    const firstDay = new Date(a,c,4).getDate()-1;

    let days="";
    for(let i=firstDay;i>0;i--){
        days +=`<div class="empety"></div>`;
    }
    for(let i=1;i<=lastDay;i++){
        if( i === new Date().getDate()){
            days +=`<div class="today">${i}</div>`;
        }else{{
            days +=`<div>${i}</div>`; 
        }}
    }
    dayEl.innerHTML=days;
