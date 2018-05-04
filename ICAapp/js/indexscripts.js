
 $("#course_sub_button").click(function () {
jQuery(document).ready(function ($) {


        var part_var, record_list, json_part,json_machine;
        json_part    = localStorage.getItem('partDBLOCAL');
        
      //  if (json_part == null){
        part_var = TAFFY([
                    {
                        "Name": "Housing",
                        "Number_Per": "1",
                        "Part_ID": "22103",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Blower",
                        "Number_Per": "1",
                        "Part_ID": "33201",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Motor",
                        "Number_Per": "1",
                        "Part_ID": "33112",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Wheels",
                        "Number_Per": "4",
                        "Part_ID": "88107",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Gauge",
                        "Number_Per": "1",
                        "Part_ID": "44722",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "IF 4 - Pads",
                        "Number_Per": "3",
                        "Part_ID": "11205",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "CF2",
                        "Number_Per": "3",
                        "Part_ID": "11209",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Viledon",
                        "Number_Per": "1",
                        "Part_ID": "11207",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Plenum",
                        "Number_Per": "1",
                        "Part_ID": "00312",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "LexanShroud",
                        "Number_Per": "1",
                        "Part_ID": "22402",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Packaging",
                        "Number_Per": "1",
                        "Part_ID": "00002",
                        "Machine" : "0001"
                    },
                    {
                        "Name": "Housing",
                        "Number_Per": "1",
                        "Part_ID": "22103",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Blower",
                        "Number_Per": "1",
                        "Part_ID": "33201",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Motor",
                        "Number_Per": "1",
                        "Part_ID": "33112",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Wheels",
                        "Number_Per": "4",
                        "Part_ID": "88107",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Gauge",
                        "Number_Per": "1",
                        "Part_ID": "44722",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "IF 4 - Pads",
                        "Number_Per": "3",
                        "Part_ID": "11205",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "CF2",
                        "Number_Per": "3",
                        "Part_ID": "11209",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Viledon",
                        "Number_Per": "1",
                        "Part_ID": "11207",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Plenum",
                        "Number_Per": "1",
                        "Part_ID": "00312",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "LexanShroud",
                        "Number_Per": "1",
                        "Part_ID": "22402",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Packaging",
                        "Number_Per": "1",
                        "Part_ID": "00002",
                        "Machine" : "0002"
                    },
                    {
                        "Name": "Test Prod",
                        "Number_Per": "2",
                        "Part_ID": "01010",
                        "Machine" : "0002"
                    }
        ]
        );
        record_list = part_var().get();
        json_part = JSON.stringify(record_list);
        localStorage.setItem('partDBLOCAL', json_part);
        console.log("created part db");
   // }

    json_machine    = localStorage.getItem('machineDBLOCAL');
   // if (json_machine == null){
        
        mach_var = TAFFY([{
        "Name": "Duster 3000",
        "MachineNo": "0001"},
        {
        "Name": "Duster 4500",
        "MachineNo": "0001"}]
        );
    
        record_list = mach_var().get();
        json_machine = JSON.stringify(record_list);
        
        localStorage.setItem('machineDBLOCAL', json_machine);

   // }
}
)

 })