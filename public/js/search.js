// $(function() {
//   $("#keywords").on("change", function() {
//     var words = $("#keywords").html();
//     var criteria_1 = $('#categories').val();
//     var criteria_2 = $('#cities').val();

//     const infoObj = {
//       words: words,
//       category: criteria_1,
//       city: criteria_2,
//     };
    
//     // STILL UNDER CONSTRUCTION
//     // AJAX is wrong here

//     $.ajax({
//       method: 'POST',
//       async: true,
//       url: '/search',
//       dataType: 'json',
//       data: infoObj,
//       error: function(error) {
//           console.log(error);
//       },
//       success: function(data) {
//         console.log(data);
//           // window.location.href = '/login';
//       },
//     });
//   });
// });
