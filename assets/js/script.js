let loader = document.getElementById('loader')

 setTimeout(() => {
   loader.style.transform = "translateY(-100%)"
 }, 3000);


 let footerDate = document.querySelector('#year')
 console.log(footerDate)

 let date = new Date().getFullYear()
 footerDate.textContent = "copyright -" + date
