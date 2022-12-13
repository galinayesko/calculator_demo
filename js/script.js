// Javascript Toplama İşlemi
  function topla() {

    var sayi1 = document.getElementById("sayi1").value;
    var sayi2 = document.getElementById("sayi2").value;
    var toplam = parseInt(sayi1) + parseInt(sayi2);
    document.getElementById("sonuc").value=toplam ;
  
  }

// Jquery Toplama İşlemi
//  $(document).ready(function() {
        
//      $("#topla").on("click",function(){
        
//          var sayi1= ($("#sayi1").val());
//          var sayi2= ($("#sayi2").val());
//         $("#sonuc").val(sayi1+sayi2);
//        });
// });

