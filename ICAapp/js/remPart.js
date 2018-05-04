

$(document).ready(function () {
    var numMachines, machineID, partid, inselected;

      
    
        $('select').material_select();

        $("#course_sub_button").click(function () {

        var json_partlist,json_machinelist, partlist,machinelist, db_partlist, db_machinelist,record_list,json_part;
        
            // get local machine/partlists
           json_partlist    = localStorage.getItem('partDBLOCAL');
           json_machinelist = localStorage.getItem('machineDBLOCAL');
   
           //parse jsons into taffyDB
           partlist = JSON.parse( json_partlist );
           machinelist = JSON.parse( json_machinelist );
           db_partlist       = TAFFY( partlist );
           db_machinelist       = TAFFY( machinelist );

            jQuery(document).ready(function($) {

                $('.dropdown-button').dropdown();

                partid = document.getElementById("part_id").value;
                inselected = document.getElementById("machlist").value;
                console.log(inselected);
               
            })

            var num_removed = db_partlist({Part_ID : partid , Machine : inselected}).remove();
            
            record_list = db_partlist().get();
            json_part = JSON.stringify(record_list);
            localStorage.setItem('partDBLOCAL', json_part);
            Materialize.toast("deleted " + num_removed + "items from the database", 4000);
        });
       
});

