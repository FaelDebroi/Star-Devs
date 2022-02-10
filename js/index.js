const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');
// duplicar a linha sfith + alt + seta para baixo
fillCounters();

function fillCounters(){
Promise.all([
    getData('people/'),
    getData('starships/'),
    getData('planets')
])

.then(data => {
persons.style.fontSize = '5em';
starships.style.fontSize = '5em';
planets.style.fontSize = '5em';


persons.innerHTML = data[0].count;
starships.innerHTML = data[1].count;
planets.innerHTML = data[2].count;
})
.catch(err => console.log('Erro:', err))

}

function getData(param){
    return fetch(`https://swapi.dev/api/${param}`)
    .then(res => res.json())
}

function loadPhraese(){
    const btn = document.getElementById('btn-phrases');
    const phrases = document.getElementById('phrases');
    
   
    
    return fetch ('https://sheet.best/api/sheets/58ffbe5e-4db0-4f88-b739-3b970def7c05')
    
    
    .then(data => data.json())
    .then(json =>{
        const random = (min , max ) => Math.floor(Math.random() * (max - min) + min);
        
        
        
        console.log(json[random(5,10)].Nome)
        btn.innerHTML = 'Ver mais uma frase!';
        phrases.innerHTML = `"${json[random(5,10)].Nome}"`

        
        
    })
    
    .catch(err => console.log('Erro:',err))
};