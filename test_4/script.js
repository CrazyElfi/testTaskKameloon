var randomNumb = null;

checkForLastState();
console.log(randomNumb);


if(localStorage.getItem('number')) {
    document.getElementById('lastNumber').innerText = "Last won number was: " + randomNumb ;
}


function checkForLastState() {
    var lastNumber = localStorage.getItem('number');

    if(lastNumber) {
        randomNumb = lastNumber;
    }
    else {
        randomNumb = getRandomInt(100);
    }

}

function getRandomInt(max) {
    var result = Math.floor(Math.random() * Math.floor(max));
    console.log('current random number: '+ result);
    return result;
}



function getFormData() {
    // var formData = new FormData(document.querySelector('form'));
    // console.log(formData.get('name'));

    var numb = document.getElementById("number").value;
    localStorage.setItem('number', numb);
    
    console.log(numb);

    if(numb == randomNumb) {
        alert("You found the number!")
        document.getElementById('lastNumber').innerText = "Last won number was: " + randomNumb ;
        randomNumb = getRandomInt(100);
    } else if (numb < randomNumb) {
        alert("Too low")
    } else if (numb > randomNumb){
        alert("Too high")

    }

    return false;
}