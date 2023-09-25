$(document).ready(function(){
    var navItem = document.getElementsByClassName('nav-item');
    navItem[0].classList.add('active-nav-item');

    function  renderOrderRows(rowData){
        var id = $('<td>').html(rowData.id);
        var customer = $('<td>').html(rowData.customerName).attr('class','primary-text');
        var time = $('<span>').html(rowData.orderTime);
        var formatDate = rowData.orderDate.split('-');
        var date = $('<td>').html(formatDate[0] + " " + formatDate[1] + ", " + formatDate[2] + '<br>').attr('class','primary-text');
        date.append(time);
        var amount = $('<td>').html("$" + rowData.amount);
        var status = $('<td>').html(rowData.orderStatus).attr('class','primary-text');
        var tr = $('<tr>').append(id,customer,date,amount,status);

        return tr;
    }

    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders',function(orderData){
        console.log(orderData)
        for(var i = 0; i<orderData.length;i++){
            $('#order-rows').append(renderOrderRows(orderData[i]));
        }
    })
    var rowCounter = document.getElementById('row-counter');
    var newOrder = document.getElementsByName('orders-new');
    newOrder[0].onclick = function(){
        var table = document.getElementById('order-rows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'NEW'){
                    if(newOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount 
    }

    var packedOrder = document.getElementsByName('orders-packed');
    packedOrder[0].onclick = function(){
        var table = document.getElementById('order-rows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'PACKED'){
                    if(packedOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount 
    }

    var inTransitOrder = document.getElementsByName('orders-transit');
    inTransitOrder[0].onclick = function(){
        var table = document.getElementById('order-rows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'INTRANSIT'){
                    if(inTransitOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount 
    }
    
    var deliveredOrder = document.getElementsByName('orders-delivered');
    deliveredOrder[0].onclick = function(){
        var table = document.getElementById('order-rows')
        var userRow = table.getElementsByTagName("tr");
        for (i = 0; i < userRow.length; i++){
            var td = userRow[i].getElementsByTagName("td")[4];
            if (td) {
                var tdTxtValue = td.textContent || td.innerText;
                if (tdTxtValue.toUpperCase() == 'DELIVERED'){
                    if(deliveredOrder[0].checked == true){
                        userRow[i].style.display = "";
                    }
                    else{
                        userRow[i].style.display = "none";
                    }
                }
            }
        }
        var rowCount = 0;
        for(j = 0;j<userRow.length; j++){
            if(userRow[j].style.display == 'none'){
                ;
            }
            else{
                rowCount++;
            }
        }
        rowCounter.innerText = "Count: " + rowCount 
    }
})