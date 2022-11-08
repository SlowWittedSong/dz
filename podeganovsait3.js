let kor = '<svg class="del" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM7 9H9V15H7V9ZM11 9H13V15H11V9ZM7 2V4H13V2H7Z" fill="#C549FF"/></svg>'

let gal = '<svg class="ok" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.172L16.192 0.979004L17.607 2.393L7 13L0.636002 6.636L2.05 5.222L7 10.172Z" fill="#C549FF"/></svg>'



window.onload = function() {
   elem.onclick = function(event) {
        event.preventDefault();
        console.log('this',this);
        let an  = document.getElementsByClassName("serch-pod2")
        var ol = document.getElementById('asd')
        var coun = ol.childElementCount
        var li = document.createElement("li")

        li.appendChild(document.createTextNode(an[0].value))
        
        var mark = document.createElement("mark")
        mark.classList.add('marochka')

        mark.innerHTML =kor + gal        

        li.appendChild(mark)
        ol.appendChild(li)

        

        let tt = mark.querySelectorAll('.del')

        tt[0].addEventListener('click', function(e) {
                this.closest('li').remove()
            }, false);

        
        let tt_ok = mark.querySelectorAll('.ok')

        tt_ok[0].addEventListener('click', function(e) {
                // this.closest('li').style.textDecoration = 'line-through'
                let back = this.closest('li')
                if (back.classList.contains('backkk')){
                    back.classList.remove("backkk")

                }

                else{
                    back.classList.add("backkk")
                }
            }, false);

   

   // console.log(coun);
  }};
 


