let userName = prompt('Who is there?', '');

if (userName === 'Admin') {
    
    let pass = prompt('Enter the password', '');

    if (pass === 'TheMaster') {
        alert('Welcome!')
    }else if(pass === '' || null) {
        alert('Canceled')
    }else{
        alert('Wrong password')
    }

    }else if (userName === '' || userName === null){
        alert('Canceled');
    } else {
        alert("I don't know you!")
    }
