

$(document).ready(function () {
    var numMachines, machineID, partname, inselected;

      
    
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

                numMachines = parseFloat($("#num_per_machine").val());
                machineID = parseFloat($("#machineID").val());
                partname = document.getElementById("part_name").value;
                inselected = document.getElementById("machlist").value;
                console.log(inselected);
               
            })

            record_list = db_partlist.insert(  {"Name": partname,
            "Number_Per": numMachines,
            "Part_ID": machineID,
            "Machine" : inselected})
            
            record_list = db_partlist().get();
            json_part = JSON.stringify(record_list);
            localStorage.setItem('partDBLOCAL', json_part);
            Materialize.toast('Item Successfully Added', 4000)
        });
       
});

