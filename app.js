let login = document.querySelector('.login')
let logout = document.querySelector('.logout')

let email = document.getElementById('email')
let password = document.getElementById('password')
let note = document.getElementById('note')



function  show() {
    if (localStorage.getItem('email')) {
        login.style.display = 'none'
        logout.style.display = 'block'
    }else{
        login.style.display = 'block'
        logout.style.display = 'none'
    }


}

show()


function btn1() {
    if(!email.value || !password.value)  return alert('plz enter info')
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        show()
        email.value = ''
        password.value = ''
}

function btn2() {
   localStorage.removeItem('email') 
   show()
}


function btn3() {
    var email = localStorage.getItem('email');

var obj = {
    email : email,
    note : note.value
}
   savevalue(obj)
   note.value = ''
}


function savevalue(obj ) {
    let notes = localStorage.getItem('notes')
    console.log(notes);

if (notes) {
   notes = JSON.parse(notes) 
   notes.push(obj)
   console.log(notes);
   localStorage.setItem('notes', JSON.stringify(notes))
}else{
    notes = [obj ]
    console.log(notes);
localStorage.setItem('notes', JSON.stringify(notes))
}
displayuser()
}
function displayuser() {
    let notes = localStorage.getItem('notes')
    let list = document.getElementById('list')
    var email = localStorage.getItem('email');
if (notes) {
    list.innerHTML = ''
    notes = JSON.parse(notes);
    console.log(notes);
    notes.forEach(function (d,i) {
        if (d.email === email) {
            let li = `<li>${d.note}
        <p>${d.email}</p>
            </li>`
        list.innerHTML += li
            
        }
    })
}

}
displayuser()