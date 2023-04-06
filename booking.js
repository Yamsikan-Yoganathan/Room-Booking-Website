$( function() {
    $( "#datepicker-Arrive" ).datepicker();
  } );

$( function() {
$( "#datepicker-Depature" ).datepicker();
} );


$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );

// $(document).ready(function(){
//   $("#btn-search").click(function(){
//     $(".property").show(250);
//   })

// });


//JSON---

let http = new XMLHttpRequest();
http.open('get', 'properties.json' , true);
http.send();
http.onload  = function(){
  if(this.readyState == 4 && this.status == 200){
    let properties = JSON.parse(this.responseText);
    let output = "";
    for(let item of properties){
      output += `
        <div class="property">
          <img src = "${item.picture}" alt ="${item.picture}">
          <div class = "sec-bar">
            <div class = "id">${item.id}</div>
            <div class="type">${item.type}</div>
            <div class="bedrooms">${item.bedrooms}</div>
            <div class="price">${item.price}</div>
            <div class="tenure">${item.tenure}</div>
          </div>
          <div class="description">${item.description}</div>
          <div class="location">${item.location}</div>
          <div class="url">${item.url}</div>
          <div class="added">${item.added}</div>
        </div>
      `;
    }

    document.querySelector(".properties").innerHTML = output;
  }
}

function showBtn() {
  document.getElementById('properties').style.display = "flex";
}
