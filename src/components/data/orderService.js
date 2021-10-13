
export  const vehicleType = [
    { value: "Hatchback/Mini Van", label: "Hatchback/Mini Van" },
    { value: "Sedan/Coupe", label: "Sedan/Coupe" },
    { value: "SUV/MPV/Trucks", label: "SUV/MPV/Trucks" },
  ];

const Hatchback='Hatchback';
const Sedan_Coupe='Sedan_Coupe';
const Limousine='Limousine';
const SUV_Truck='SUV_Truck';
const All='All';

  export  const midCategory = [
    { value: "D", label: "D"},
    { value: "EW", label: "EW"},
    { value: "ED", label: "ED"},
    { value: "EP", label: "EP"},
    { value: "IDC", label: "IDC"},
    { value: "ID", label: "ID"},
    { value: "ABT", label: "ABT"},
    { value: "LRST", label: "LRST"},
    { value: "ARR", label: "ARR"},
    { value: "ECC", label: "ECC"},
    { value: "WCC", label: "WCC"},
    { value: "ILC", label: "ILC"},
    { value: "ITC", label: "ITC"},
    { value: "CCC", label: "CCC"},
    { value: "PPF", label: "PPF"},
    { value: "VYN", label: "VYN"},
    { value: "TNT", label: "TNT"},
  ];

  export  const lowCategory =[
    { value: "Light Scratches", label: "Light Scratches",link:"Exterior (Paint Correction & Prep)" },
    { value: "Medium Scratches", label: "Medium Scratches",link:"Exterior (Paint Correction & Prep)" },
    { value: "Deep Scratches", label: "Deep Scratches",link:"Exterior (Paint Correction & Prep)" },
    { value: "Damaged Surface", label: "Damaged Surface",link:"Exterior (Paint Correction & Prep)" },
    { value: "Nano Ceramic Coating 2Y", label: "Nano Ceramic Coating 2Y",link:"Exterior (Paint)" },
    { value: "Nano Ceramic Coating 3Y", label: "Nano Ceramic Coating 3Y",link:"Exterior (Paint)" },
    { value: "Graphene Ceramic Coating 5Y", label: "Graphene Ceramic Coating 5Y",link:"Exterior (Paint)" },
    { value: "Graphene Ceramic Coating 10Y", label: "Graphene Ceramic Coating 10Y",link:"Exterior (Paint)" },
    { value: "Leather Ceramic Coating", label: "Leather Ceramic Coating",link:"Interior (Leather)" },
    { value: "Plastic & Trim Ceramic Coating", label: "Plastic & Trim Ceramic Coating" ,link:"Interior (Plastic & Trim)"},
    { value: "Undamaged Surface+B44", label: "Undamaged Surface+B44",link:"Exterior (Complete Detail)" },
    { value: "Scratched Paint", label: "Scratched Paint",link:"Exterior (Complete Detail)" },
    { value: "Damaged Surface", label: "Damaged Surface",link:"Exterior (Complete Detail)" },
    { value: "Regular", label: "Regular",link:"Interior (Complete Detail)" },
    { value: "Deep Clean", label: "Deep Clean",link:"Interior (Complete Detail)" },
    { value: "Headlight Restoration", label: "Headlight Restoration",link:"Restoration" },
    { value: "Plastic/Chrome Restoration", label: "Plastic/Chrome Restoration",link:"Restoration" },
    { value: "Leather Restoration", label: "Leather Restoration",link:"Restoration" },
    { value: "Fabric Restoration", label: "Fabric Restoration",link:"Restoration" },
    { value: "Clear Full Body PPF 4Y", label: "Clear Full Body PPF 4Y",link:"Paint Protection Film" },
    { value: "Matt Full Body PPF 3Y", label: "Matt Full Body PPF 3Y",link:"Paint Protection Film" },
    { value: "Partial PPF", label: "Partial PPF",link:"Paint Protection Film" },
    { value: "Gloss Full Body 3Y", label: "Gloss Full Body 3Y",link:"Vinyl Wrap" },
    { value: "Matt Full Body 3Y", label: "Matt Full Body 3Y",link:"Vinyl Wrap" },
    { value: "Partial Wraps", label: "Partial Wraps",link:"Vinyl Wrap" },
  ]
  
  export  const Price =[
    { value: "0", label: "free" ,link:[{vehicleType:[All],lowCategory:'Light Scratches'}]},

    { value: "2500", label: "2500" ,link:[{vehicleType:[All],lowCategory:'Plastic/ Trim Restoration'}]},

    { value: "3500", label: "3500" ,link:[{vehicleType:[All],lowCategory:'Headlight Restoration'}]},

    { value: "5000", label: "5000" ,link:[{vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Regular'},{vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Plastic/Chrome Restoration'}]},

    { value: "5500", label: "5500" ,link:[{vehicleType:[Limousine,SUV_Truck],lowCategory:'Plastic/Chrome Restoration'}]},

    { value: "6500", label: "6500" ,link:[
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Regular'}
    ]},
    
    { value: "7500", label: "7500" ,link:[
      {vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Medium Scratches'},
      {vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Leather Restoration'},
      {vehicleType:[Hatchback],lowCategory:'Plastic & Trim Ceramic Coating'}]
    },
    
    { value: "8500", label: "8500" ,link:[ 
      {vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Deep Clean'},
      {vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Undamaged Surface+B44'},
    ]},
    
    { value: "9500", label: "9500" ,link:[
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Leather Restoration'}
    ]},
    
    { value: "10000", label: "10000" ,link:[
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Medium Scratches'},
      {vehicleType:[All],lowCategory:'Leather Ceramic Coating'},
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Undamaged Surface+B44'},
    ]},
    
    { value: "10500", label: "10500",link:[
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Deep Clean'},
    ] },
    
    { value: "14500", label: "14500",link:[
      {vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Scratched Paint'},
    ]},
    
    { value: "15500", label: "15500",link:[{vehicleType:[Hatchback,Sedan_Coupe],lowCategory:'Deep Scratches'}] },
    
    { value: "16500", label: "16500",link:[
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Plastic & Trim Ceramic Coating'},
      {vehicleType:[Limousine,SUV_Truck],lowCategory:'Scratched Paint'},
    ] },
    
    { value: "17500", label: "17500",link:[{vehicleType:[Limousine,SUV_Truck],lowCategory:'Deep Scratches'}] },
    
    { value: "45000", label: "45000",link:[
      {vehicleType:[Hatchback],lowCategory:'Nano Ceramic Coating 2Y'}
    ] },
    
    { value: "75000", label: "75000",link:[
      {vehicleType:[Sedan_Coupe],lowCategory:'Nano Ceramic Coating 2Y'}
    ] },
    
    { value: "80000", label: "80000",link:[{vehicleType:[Hatchback],lowCategory:'Nano Ceramic Coating 3Y'}] },
    
    { value: "95000", label: "95000",link:[
      {vehicleType:[Limousine],lowCategory:'Nano Ceramic Coating 2Y'},
      {vehicleType:[Hatchback],lowCategory:'Clear Full Body PPF 4Y'},
    ] },
    
    { value: "100000", label: "100000" ,link:[{vehicleType:[Sedan_Coupe],lowCategory:'Nano Ceramic Coating 3Y'}]},
    
    { value: "105000", label: "105000" ,link:[
      {vehicleType:[SUV_Truck],lowCategory:'Nano Ceramic Coating 2Y'}
    ]},
    
    { value: "110000", label: "110000" ,link:[
      {vehicleType:[Hatchback],lowCategory:'Graphene Ceramic Coating 5Y'},
      {vehicleType:[Sedan_Coupe],lowCategory:'Gloss Full Body 3Y'},
    ]},
    
    { value: "115000", label: "115000" ,link:[
      {vehicleType:[Hatchback],lowCategory:'Matt Full Body 3Y'},
      {vehicleType:[Hatchback],lowCategory:'Matt Full Body PPF 3Y'},
    ]},
    
    { value: "120000", label: "120000" ,link:[{vehicleType:[Limousine],lowCategory:'Nano Ceramic Coating 3Y'}]},
    
    { value: "130000", label: "130000" ,link:[
      {vehicleType:[SUV_Truck],lowCategory:'Nano Ceramic Coating 3Y'},
      {vehicleType:[Sedan_Coupe],lowCategory:'Clear Full Body PPF 4Y'},
    ]},
    
    { value: "135000", label: "135000" ,link:[{vehicleType:[Limousine],lowCategory:'Graphene Ceramic Coating 5Y'}]},

    { value: "150000", label: "150000" ,link:[{vehicleType:[Sedan_Coupe],lowCategory:'Matt Full Body PPF 3Y'}]},
    
    { value: "160000", label: "160000" ,link:[{vehicleType:[Limousine],lowCategory:'Graphene Ceramic Coating 5Y'}]},
    
    { value: "165000", label: "165000" ,link:[
      {vehicleType:[Limousine],lowCategory:'Gloss Full Body 3Y'},
      {vehicleType:[Hatchback],lowCategory:'Graphene Ceramic Coating 10Y'},
    ]},
    
    { value: "175000", label: "175000" ,link:[{vehicleType:[SUV_Truck],lowCategory:'Graphene Ceramic Coating 5Y'}]},
    
    { value: "190000", label: "190000" ,link:[
      {vehicleType:[Limousine],lowCategory:'Matt Full Body 3Y'},
      {vehicleType:[Sedan_Coupe],lowCategory:'Graphene Ceramic Coating 10Y'},
    ]},
   
    { value: "195000", label: "195000" ,link:[{vehicleType:[Limousine],lowCategory:'Clear Full Body PPF 4Y'}]},
    
    { value: "205000", label: "205000" ,link:[{vehicleType:[SUV_Truck],lowCategory:'Gloss Full Body 3Y'}]},

    { value: "215000", label: "215000" ,link:[{vehicleType:[Limousine],lowCategory:'Matt Full Body PPF 3Y'}]},

    { value: "220000", label: "220000" ,link:[{vehicleType:[SUV_Truck],lowCategory:'Clear Full Body PPF 4Y'}]},
    
    { value: "225000", label: "225000" ,link:[{vehicleType:[SUV_Truck],lowCategory:'Matt Full Body 3Y'}]},

    { value: "250000", label: "250000" ,link:[{vehicleType:[SUV_Truck],lowCategory:'Matt Full Body PPF 3Y'}]},
    
    { value: "Quote on inspection", label: "Quote on inspection",link:[
    {vehicleType:['All'],lowCategory:'Damaged Surface'},
    {vehicleType:['All'],lowCategory:'Partial PPF'},
    {vehicleType:['All'],lowCategory:'Partial Wraps'},
    {vehicleType:['All'],lowCategory:'Partial Wraps'},
  ] },
  ]

export const emailtemplates=[
  {label:'PPF Job Underway',value:'Dear Customer, the Paint Protection Film job on your vehicle is underway. We will contact you as soon as the job is complete. The Volante Team'},
  {label:'PPF Job Complete',value:'Dear Customer, the Paint Protection Film job on your vehicle is complete. Your vehicle is ready for collection. The Volante Team'},
  {label:'Ceramic Coating Job underway',value:'Dear Customer, the Ceramic Coating job on your vehicle is underway. We will contact you as soon as the job is complete. The Volante Team'},
  {label:'Ceramic Coating Job Complete',value:'Dear Customer, the Ceramic Coating job on your vehicle is complete. Your vehicle is ready for collection. The Volante Team'},
  {label:'General Job Complete',value:'Dear Customer, the job on your vehicle is complete and your vehicle is ready for collection. The Volante Team'},
  {label:'Customer Feedback Request',value:'Dear Customer, thank you for choosing Volante to keep your vehicle looking great! If you were satisfied with our service, please do leave us a Google Review. If you have any suggestions or complaints, please contact our customer support via email on support@volantedetailing.com and we will get back to you.'},
  {label:'FAQ tips & information',value:'Dear Customer, please refer FAQs section on our website www.volantedetailing.com for information & tips on how to maintain your vehicle\'s ceramic coating.'},
]

  export const services=[
    {
      "JobID": "D001",
      "ServiceName": "Detailed Car Wash (Exterior only)",
      "Hatchback/Mini Van": "1750.00",
      "Sedan/Coupe": "2000.00",
      "link":"d",
      "SUV/MPV/Trucks": "2250.00"
    },
    {
      "JobID": "D002",
      "ServiceName": "Detailed Car Wash & Interior Clean",
      "Hatchback/Mini Van": "2750.00",
      "Sedan/Coupe": "3000.00",
      "link":"d",
      "SUV/MPV/Trucks": "3300.00"
    },
    {
      "JobID": "EW01",
      "ServiceName": "Exterior Wax",
      "Hatchback/Mini Van": "2250.00",
      "Sedan/Coupe": "2750.00",
      "link":"d",
      "SUV/MPV/Trucks": "3000.00"
    },
    {
      "JobID": "ED01",
      "ServiceName": "Exterior Standard Detailing Package",
      "Hatchback/Mini Van": "7500.00",
      "Sedan/Coupe": "9500.00",
      "link":"d",
      "SUV/MPV/Trucks": "10500.00"
    },
    {
      "JobID": "ED02",
      "ServiceName": "Exterior Advanced Detailing Package",
      "Hatchback/Mini Van": "12500.00",
      "Sedan/Coupe": "14500.00",
      "link":"d",
      "SUV/MPV/Trucks": "15500.00"
    },
    {
      "JobID": "EPC1",
      "ServiceName": "Exterior Deep Paint Correction",
      "Hatchback/Mini Van": "16500.00",
      "Sedan/Coupe": "17500.00",
      "link":"d",
      "SUV/MPV/Trucks": "18750.00"
    },
    {
      "JobID": "IDC1",
      "ServiceName": "Interior Deep Clean (Steam Cleaned & Extracted)",
      "Hatchback/Mini Van": "2000.00",
      "Sedan/Coupe": "2500.00",
      "link":"d",
      "SUV/MPV/Trucks": "3000.00"
    },
    {
      "JobID": "ID01",
      "ServiceName": "Interior Detailing Package",
      "Hatchback/Mini Van": "4500.00",
      "Sedan/Coupe": "5500.00",
      "link":"d",
      "SUV/MPV/Trucks": "6500.00"
    },
    {
      "JobID": "ABT1",
      "ServiceName": "Anti-Bacterial Interior Treatment",
      "Hatchback/Mini Van": "500",
      "Sedan/Coupe": "500",
      "link":"d",
      "SUV/MPV/Trucks": "750"
    },
    {
      "JobID": "LRST",
      "ServiceName": "Headlight/Taillight restoration",
      "Hatchback/Mini Van": "3000.00",
      "Sedan/Coupe": "3500.00",
      "link":"d",
      "SUV/MPV/Trucks": "3500.00"
    },
    {
      "JobID": "ARR1",
      "ServiceName": "Acid Rain Removal from Glass",
      "Hatchback/Mini Van": "2000.00",
      "Sedan/Coupe": "2000.00",
      "link":"d",
      "SUV/MPV/Trucks": "2000.00"
    },
    {
      "JobID": "ECC1",
      "ServiceName": "Exterior Ceramic Coating Package (2Y)",
      "Hatchback/Mini Van": "50000.00",
      "Sedan/Coupe": "75000.00",
      "link":"d",
      "SUV/MPV/Trucks": "99500.00"
    },
    {
      "JobID": "ECC2",
      "ServiceName": "Exterior Ceramic Coating Package (3Y)",
      "Hatchback/Mini Van": "65000.00",
      "Sedan/Coupe": "90000.00",
      "link":"d",
      "SUV/MPV/Trucks": "115000.00"
    },
    {
      "JobID": "ECC3",
      "ServiceName": "Exterior Graphene Coating Package (5Y)",
      "Hatchback/Mini Van": "110000.00",
      "Sedan/Coupe": "140000.00",
      "link":"d",
      "SUV/MPV/Trucks": "170000.00"
    },
    {
      "JobID": "WCC1",
      "ServiceName": "Alloy Wheel & Calliper Ceramic Coating",
      "Hatchback/Mini Van": "5000.00",
      "Sedan/Coupe": "5000.00",
      "link":"d",
      "SUV/MPV/Trucks": "5000.00"
    },
    {
      "JobID": "ILC1",
      "ServiceName": "Interior Full Leather Coating Package",
      "Hatchback/Mini Van": "7500.00",
      "Sedan/Coupe": "10000.00",
      "link":"d",
      "SUV/MPV/Trucks": "13500.00"
    },
    {
      "JobID": "ILC2",
      "ServiceName": "Interior Partial Leather Coating Package",
      "Hatchback/Mini Van": "5000.00",
      "Sedan/Coupe": "7500.00",
      "link":"d",
      "SUV/MPV/Trucks": "9500.00"
    },
    {
      "JobID": "ITC1",
      "ServiceName": "Interior Trim Coating Package ",
      "Hatchback/Mini Van": "5000.00",
      "Sedan/Coupe": "7500.00",
      "link":"d",
      "SUV/MPV/Trucks": "9500.00"
    },
    {
      "JobID": "CCC1",
      "ServiceName": "Complete Ceramic Coating Package (2Y)",
      "Hatchback/Mini Van": "65000.00",
      "Sedan/Coupe": "95000.00",
      "link":"d",
      "SUV/MPV/Trucks": "125000.00"
    },
    {
      "JobID": "CCC2",
      "ServiceName": "Complete Ceramic Coating Package (3Y)",
      "Hatchback/Mini Van": "75000.00",
      "Sedan/Coupe": "105000.00",
      "link":"d",
      "SUV/MPV/Trucks": "135000.00"
    },
    {
      "JobID": "CCC3",
      "ServiceName": "Complete Graphene Coating Package (5Y)",
      "Hatchback/Mini Van": "110000.00",
      "Sedan/Coupe": "140000.00",
      "link":"d",
      "SUV/MPV/Trucks": "165000.00"
    },
    {
      "JobID": "PPF01",
      "ServiceName": "Exterior Complete Clear Gloss PPF Package (5Y)",
      "Hatchback/Mini Van": "155000.00",
      "Sedan/Coupe": "195000.00",
      "link":"d",
      "SUV/MPV/Trucks": "220000.00"
    },
    {
      "JobID": "PPF02",
      "ServiceName": "Exterior Partial Clear Gloss PPF Front Bumper (5Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "13000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "PPF03",
      "ServiceName": "Exterior Partial Clear Gloss PPF Rear Bumper (5Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "13000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "PPF04",
      "ServiceName": "Exterior Partial Clear Gloss PPF Side Mirrors (5Y)",
      "Hatchback/Mini Van": "4500.00",
      "Sedan/Coupe": "5500.00",
      "link":"d",
      "SUV/MPV/Trucks": "6500.00"
    },
    {
      "JobID": "PPF05",
      "ServiceName": "Exterior Partial Clear Gloss PPF Roof (With Sunroof) (5Y)",
      "Hatchback/Mini Van": "35000.00",
      "Sedan/Coupe": "37500.00",
      "link":"d",
      "SUV/MPV/Trucks": "42000.00"
    },
    {
      "JobID": "PPF06",
      "ServiceName": "Exterior Partial Clear Gloss PPF Roof (Without Sunroof) (5Y)",
      "Hatchback/Mini Van": "30000.00",
      "Sedan/Coupe": "32500.00",
      "link":"d",
      "SUV/MPV/Trucks": "37000.00"
    },
    {
      "JobID": "PPF07",
      "ServiceName": "Exterior Partial Clear Gloss PPF Door Edges (5Y)",
      "Hatchback/Mini Van": "2500.00",
      "Sedan/Coupe": "2500.00",
      "link":"d",
      "SUV/MPV/Trucks": "2500.00"
    },
    {
      "JobID": "PPF08",
      "ServiceName": "Exterior Partial Clear Gloss PPF Door Inner sills (5Y)",
      "Hatchback/Mini Van": "5500.00",
      "Sedan/Coupe": "6000.00",
      "link":"d",
      "SUV/MPV/Trucks": "7500.00"
    },
    {
      "JobID": "PPF09",
      "ServiceName": "Exterior Partial Clear Gloss PPF Head-lights & Tail-lights (5Y)",
      "Hatchback/Mini Van": "7000.00",
      "Sedan/Coupe": "7000.00",
      "link":"d",
      "SUV/MPV/Trucks": "7000.00"
    },
    {
      "JobID": "PPF10",
      "ServiceName": "Interior Partial Clear Gloss PPF Door Bottom (5Y)",
      "Hatchback/Mini Van": "7500.00",
      "Sedan/Coupe": "7500.00",
      "link":"d",
      "SUV/MPV/Trucks": "7500.00"
    },
    {
      "JobID": "PPF11",
      "ServiceName": "Interior Trim Clear Gloss PPF Package (5Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "15000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "PPF12",
      "ServiceName": "Exterior Complete Clear Matt PPF Package (3Y)",
      "Hatchback/Mini Van": "130000.00",
      "Sedan/Coupe": "175000.00",
      "link":"d",
      "SUV/MPV/Trucks": "205000.00"
    },
    {
      "JobID": "PPF13",
      "ServiceName": "Exterior Partial Clear Matt PPF Front Bumper (3Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "13000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "PPF14",
      "ServiceName": "Exterior Partial Clear Matt PPF Rear Bumper (3Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "13000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "PPF15",
      "ServiceName": "Exterior Partial Clear Matt PPF Side Mirrors (3Y)",
      "Hatchback/Mini Van": "4500.00",
      "Sedan/Coupe": "5500.00",
      "link":"d",
      "SUV/MPV/Trucks": "6500.00"
    },
    {
      "JobID": "PPF16",
      "ServiceName": "Exterior Partial Clear Matt PPF Roof (With Sunroof) (3Y)",
      "Hatchback/Mini Van": "35000.00",
      "Sedan/Coupe": "37500.00",
      "link":"d",
      "SUV/MPV/Trucks": "42000.00"
    },
    {
      "JobID": "PPF17",
      "ServiceName": "Exterior Partial Clear Matt PPF Roof (Without Sunroof) (3Y)",
      "Hatchback/Mini Van": "30000.00",
      "Sedan/Coupe": "32500.00",
      "link":"d",
      "SUV/MPV/Trucks": "37000.00"
    },
    {
      "JobID": "PPF18",
      "ServiceName": "Exterior Partial Clear Matt PPF Door Edges (3Y)",
      "Hatchback/Mini Van": "2500.00",
      "Sedan/Coupe": "2500.00",
      "link":"d",
      "SUV/MPV/Trucks": "2500.00"
    },
    {
      "JobID": "PPF19",
      "ServiceName": "Exterior Partial Clear Matt PPF Door Inner sills (3Y)",
      "Hatchback/Mini Van": "5500.00",
      "Sedan/Coupe": "6000.00",
      "link":"d",
      "SUV/MPV/Trucks": "7500.00"
    },
    {
      "JobID": "PPF20",
      "ServiceName": "Exterior Partial Clear Matt PPF Head-lights & Tail-lights (3Y)",
      "Hatchback/Mini Van": "7000.00",
      "Sedan/Coupe": "7000.00",
      "link":"d",
      "SUV/MPV/Trucks": "7000.00"
    },
    {
      "JobID": "PPF21",
      "ServiceName": "Interior Partial Clear Matt PPF Door Bottom (3Y)",
      "Hatchback/Mini Van": "7500.00",
      "Sedan/Coupe": "7500.00",
      "link":"d",
      "SUV/MPV/Trucks": "7500.00"
    },
    {
      "JobID": "PPF22",
      "ServiceName": "Interior Trim Clear Matt PPF Package (3Y)",
      "Hatchback/Mini Van": "12000.00",
      "Sedan/Coupe": "15000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "VYN01",
      "ServiceName": "Exterior Complete Gloss Vinyl Wrap Package (3Y)",
      "Hatchback/Mini Van": "145000.00",
      "Sedan/Coupe": "180000.00",
      "link":"d",
      "SUV/MPV/Trucks": "205000.00"
    },
    {
      "JobID": "VYN02",
      "ServiceName": "Exterior Partial Gloss Vinyl Wrap Front Bumper (3Y)",
      "Hatchback/Mini Van": "9500.00",
      "Sedan/Coupe": "10500.00",
      "link":"d",
      "SUV/MPV/Trucks": "13500.00"
    },
    {
      "JobID": "VYN03",
      "ServiceName": "Exterior Partial Gloss Vinyl Wrap Rear Bumper (3Y)",
      "Hatchback/Mini Van": "9500.00",
      "Sedan/Coupe": "10500.00",
      "link":"d",
      "SUV/MPV/Trucks": "13500.00"
    },
    {
      "JobID": "VYN04",
      "ServiceName": "Exterior Partial Gloss Vinyl Wrap Side Mirrors (3Y)",
      "Hatchback/Mini Van": "3000.00",
      "Sedan/Coupe": "3500.00",
      "link":"d",
      "SUV/MPV/Trucks": "3500.00"
    },
    {
      "JobID": "VYN05",
      "ServiceName": "Exterior Partial Gloss Vinyl Wrap Roof (With Sunroof) (3Y)",
      "Hatchback/Mini Van": "25000.00",
      "Sedan/Coupe": "27500.00",
      "link":"d",
      "SUV/MPV/Trucks": "32000.00"
    },
    {
      "JobID": "VYN06",
      "ServiceName": "Exterior Partial Gloss Vinyl Wrap Roof (Without Sunroof) (3Y)",
      "Hatchback/Mini Van": "20000.00",
      "Sedan/Coupe": "22500.00",
      "link":"d",
      "SUV/MPV/Trucks": "28500.00"
    },
    {
      "JobID": "VYN07",
      "ServiceName": "Interior Trim Gloss Vinyl Wrap Package (3Y)",
      "Hatchback/Mini Van": "10000.00",
      "Sedan/Coupe": "12000.00",
      "link":"d",
      "SUV/MPV/Trucks": "14000.00"
    },
    {
      "JobID": "VYN08",
      "ServiceName": "Exterior Complete Matt Vinyl Wrap Package (3Y)",
      "Hatchback/Mini Van": "150000.00",
      "Sedan/Coupe": "190000.00",
      "link":"d",
      "SUV/MPV/Trucks": "215000.00"
    },
    {
      "JobID": "VYN09",
      "ServiceName": "Exterior Partial Matt Vinyl Wrap Front Bumper (3Y)",
      "Hatchback/Mini Van": "10000.00",
      "Sedan/Coupe": "12000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "VYN10",
      "ServiceName": "Exterior Partial Matt Vinyl Wrap Rear Bumper (3Y)",
      "Hatchback/Mini Van": "10000.00",
      "Sedan/Coupe": "12000.00",
      "link":"d",
      "SUV/MPV/Trucks": "15000.00"
    },
    {
      "JobID": "VYN11",
      "ServiceName": "Exterior Partial Matt Vinyl Wrap Side Mirrors (3Y)",
      "Hatchback/Mini Van": "3000.00",
      "Sedan/Coupe": "3500.00",
      "link":"d",
      "SUV/MPV/Trucks": "3500.00"
    },
    {
      "JobID": "VYN12",
      "ServiceName": "Exterior Partial Matt Vinyl Wrap Roof (With Sunroof) (3Y)",
      "Hatchback/Mini Van": "26000.00",
      "Sedan/Coupe": "28500.00",
      "link":"d",
      "SUV/MPV/Trucks": "33000.00"
    },
    {
      "JobID": "VYN13",
      "ServiceName": "Exterior Partial Matt Vinyl Wrap Roof (Without Sunroof) (3Y)",
      "Hatchback/Mini Van": "21000.00",
      "Sedan/Coupe": "23500.00",
      "link":"d",
      "SUV/MPV/Trucks": "29500.00"
    },
    {
      "JobID": "VYN14",
      "ServiceName": "Interior Trim Matt Vinyl Wrap Package (3Y)",
      "Hatchback/Mini Van": "10000.00",
      "Sedan/Coupe": "12000.00",
      "link":"d",
      "SUV/MPV/Trucks": "14000.00"
    },
    {
      "JobID": "TNT01",
      "ServiceName": "Tint Package 1 (4 Side Windows)",
      "Hatchback/Mini Van": "6500.00",
      "Sedan/Coupe": "7500.00",
      "link":"d",
      "SUV/MPV/Trucks": "8500.00"
    },
    {
      "JobID": "TNT02",
      "ServiceName": "Tint Package 2 (4 Side Windows)",
      "Hatchback/Mini Van": "8500.00",
      "Sedan/Coupe": "10000.00",
      "link":"d",
      "SUV/MPV/Trucks": "12000.00"
    },
    {
      "JobID": "TNT03",
      "ServiceName": "Tint Front Windscreen 1",
      "Hatchback/Mini Van": "3500.00",
      "Sedan/Coupe": "4000.00",
      "link":"d",
      "SUV/MPV/Trucks": "5000.00"
    },
    {
      "JobID": "TNT04",
      "ServiceName": "Tint Front Windscreen 2",
      "Hatchback/Mini Van": "4500.00",
      "Sedan/Coupe": "5500.00",
      "link":"d",
      "SUV/MPV/Trucks": "6500.00"
    },
    {
      "JobID": "TNT05",
      "ServiceName": "Tint Rear Windscreen 1",
      "Hatchback/Mini Van": "3500.00",
      "Sedan/Coupe": "4000.00",
      "link":"d",
      "SUV/MPV/Trucks": "5000.00"
    },
    {
      "JobID": "TNT06",
      "ServiceName": "Tint Rear Windscreen 2",
      "Hatchback/Mini Van": "4500.00",
      "Sedan/Coupe": "5500.00",
      "link":"d",
      "SUV/MPV/Trucks": "6500.00"
    },
    {
      "JobID": "TNT07",
      "ServiceName": "Tint Head-lights/ Tail-lights",
      "Hatchback/Mini Van": "4000.00",
      "Sedan/Coupe": "4500.00",
      "link":"",
      "SUV/MPV/Trucks": "5500.00"
    }
  ]

  export const  jobID=[];
  export const serviceName=[];
  

  services.forEach((val)=>{
    jobID.push({label:val.JobID,value:val.JobID});
    serviceName.push({label:val.ServiceName,value:val.ServiceName,JobID:val.JobID});
  })

  // ServiceName.push({label:'d',value:'d'})
