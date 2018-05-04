

$(document).ready(function () {

    $('.dropdown-button').dropdown();

    var json_partlist,json_machinelist, partlist,machinelist, db_partlist, db_machinelist,record_list,json_part;
        
    // get local machine/partlists
    json_partlist    = localStorage.getItem('partDBLOCAL');
    json_machinelist = localStorage.getItem('machineDBLOCAL');

    //parse jsons into taffyDB
    partlist = JSON.parse( json_partlist );
    machinelist = JSON.parse( json_machinelist );
    db_partlist       = TAFFY( partlist );
    db_machinelist       = TAFFY( machinelist );   
        

    $('select').material_select();

    $("#course_sub_button").click(function () {

        jQuery(document).ready(function($) {

                var numMachines = parseFloat($("#num_machines").val());
                //var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
                var inselected = document.getElementById("machlist");
                var select_mach = inselected.options[inselected.selectedIndex].value;
                var arrItems;
                if (select_mach == 0001){
                 arrItems = db_partlist({Machine: "0001"}).get();
                 var htmlstr = "<br><h3> Duster 3000 </h3> <br> <h4> Machines Created : " + numMachines + "</h4>";
                 document.getElementById('dataHeader').innerHTML = htmlstr;   
                }
                else{
                     arrItems = db_partlist({Machine: "0002"}).get();
                     document.getElementById('dataHeader').innerHTML = '<br><h2> Duster Example </h2><br> '; 
                }

                            // DEFINE TABLE HEADERS
                var col = ["Name","Number Per Unit","Part ID","Total Number"];
                
                
                var tableitems = [];
                for (var i = 0; i < arrItems.length; i++) {
                    arrItems[i]["Total_Number"] = arrItems[i]["Number_Per"] * numMachines;
                }
                
            
                // CREATE DYNAMIC TABLE.
                var table = document.createElement("table");
      
                // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
      
                var tr = table.insertRow(-1);                   // TABLE ROW.
      
                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
      
                // ADD JSON DATA TO THE TABLE AS ROWS.
                for (var i = 0; i < arrItems.length; i++) {
      
                    tr = table.insertRow(-1);
      
                    for (var j = 0; j < 4; j++) {
                        var tabCell = tr.insertCell(-1);
                        if (j == 0) tabCell.innerHTML = arrItems[i]['Name'];
                        if (j == 1) tabCell.innerHTML = arrItems[i]['Number_Per'];
                        if (j == 2) tabCell.innerHTML = arrItems[i]['Part_ID'];
                        if (j == 3) tabCell.innerHTML = arrItems[i]['Total_Number'];
                    }
                }
      
                // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                var divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
            
        });

    });
});

