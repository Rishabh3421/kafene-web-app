$(document).ready(function(){
    var navItem = document.getElementsByClassName('nav-item');
    navItem[2].classList.add('active-nav-item');
    
    var searchContainer = document.getElementById('search-container');
    searchContainer.onsubmit = function(e){
        e.preventDefault();
    }
    function  renderuserRows(rowData){
        var id = $('<td>').html(rowData.id);
        var userimage = $('<img>').attr('src',rowData.profilePic)
        var userAvatar = $('<td>').append(userimage)
        var userName = $('<td>').html(rowData.fullName);
        var formatDate = rowData.dob.split('-');
        var dob = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class','primary-text');
        var gender = $('<td>').html(rowData.gender);
        var currentLocation = $('<td>').html(rowData.currentCity + ', ' + rowData.currentCountry);
        var tr = $('<tr>').append(id,userAvatar,userName,dob,gender,currentLocation);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users',function(userData){
        console.log(userData)
        for(var i = 0; i<userData.length;i++){
            $('#user-rows').append(renderuserRows(userData[i]));
        }
    })
    
    var searchBox = document.getElementById('search-box');
    searchBox.onkeyup = function(){
        var filter = searchBox.value.toUpperCase();
        var table = document.getElementById('user-rows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[2];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase().indexOf(filter) > -1){
                    userRow[i].style.display = "";
                } 
                else{
                    userRow[i].style.display = "none";
                }
            }
        }       
    }
    var resetBtn = document.getElementById('reset-btn');
    resetBtn.onclick = function(){
        var table = document.getElementById('user-rows')
        var userRow = table.getElementsByTagName("tr");
        for(var i = 0;i<userRow.length;i++){
            userRow[i].style.display = 'table-row';
        }
    }
})