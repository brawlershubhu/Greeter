console.log('Hello World!');
    document.getElementById('text1').style.display = 'none';
        document.getElementById('text3').style.display = 'none';
      document.getElementById('text2').style.display = 'none';

function run(){
  let h = new Date();
  let hour = h.getHours();
  

 
   if(hour <= 12){
    document.getElementById('text1').style.display = 'block';
   }
 if(hour >= 18){
    document.getElementById('text3').style.display = 'block';

  }

}
