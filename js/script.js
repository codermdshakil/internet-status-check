// selection all required Elements 
const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifiIcon = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subtitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon');


window.onload = () =>{ // once window loaded
    function ajax(){
        let xhr = new XMLHttpRequest(); // creating new XML object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // sending get request to this URL
        xhr.onload = (event) => { // onace ajax loaded

            // if ajax status is equal to or 200 or less than 300 that mean is getting data/ response from that preview URl
            // or user he/ she is getting response or 200 status code 
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove('offline');
                title.innerText = "You're online now";
                subtitle.innerText = "Hurray! Internet is connected";
                wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`;

                closeIcon.onclick = () =>{
                    wrapper.classList.add('hide');
                } 

                setTimeout(() =>{
                    wrapper.classList.add('hide');
                }, 5000)
            }
            else{ // user don't  online ot may geetting somthing error massage
                ofline();
            }
        } 
        xhr.onerror = (event) => {  // if the pass URL is incorrect or returing 404 or other error
            
            ofline();
        }
        xhr.send(); 
    }

    function ofline(){
        wrapper.classList.remove('hide');
        toast.classList.add('offline');
        title.innerText = "You're offline now";
        subtitle.innerText = "Opps! Internet is disconnected";
        wifiIcon.innerHTML = `<p class="uil uil-wifi-slash" ></p>`;
    }

    // ajax(); // calling ajax funtion  
    setInterval(() =>{
        ajax();
    }, 100 )
}




