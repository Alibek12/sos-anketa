window.onload = () => {

    const buttonSubmit = document.getElementById('btn');
    buttonSubmit.addEventListener('click',() => {
        window.print();
        location.href = " https://wa.me/996706649559";
    })
    const ch1 = document.getElementById('1');
    const ch2 = document.getElementById('2');
    const ch3 = document.getElementById('3');

    // govno code i know )))
    ch1.oninput = () =>{
        ch2.checked = false;
        ch3.checked = false;
    }
    ch2.oninput = () =>{
        ch1.checked = false;
        ch3.checked = false;
    }
    ch3.oninput = () =>{
        ch2.checked = false;
        ch1.checked = false;
    }
}