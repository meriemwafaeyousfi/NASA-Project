

export const rovers = [
    {
      name: "Curiosity",
      id: "rover-1",
      description: "Launched in 2011, Curiosity is exploring Gale Crater to study Mars' climate and geology. It searches for signs of past life and investigates the planet's habitability. ",
      imgSrc : `${process.env.PUBLIC_URL}/assets/curiosity.jpeg`
    },
    {
      name: "Opportunity",
      id: "rover-2",
      description: "Landed in 2004, Opportunity explored the Meridiani Planum and discovered strong evidence of ancient water. It operated for nearly 15 years before losing contact in 2018.",
      imgSrc : `${process.env.PUBLIC_URL}/assets/opportunity.jpeg`
    },
    {
      name: "Spirit",
      id: "rover-3",
      description: "Arrived on Mars in 2004 alongside Opportunity, Spirit studied the Martian surface for over six years. It provided key insights into Mars' volcanic activity and past water presence.",
      imgSrc : `${process.env.PUBLIC_URL}/assets/spirit.jpeg`
    },
  ];
  


  export const cameras = [
    { icon: "pi pi-eye", value: "MAST" },
    { icon: "pi pi-image", value: "NAVCAM" },
    { icon: "pi pi-camera", value: "CHEMCAM" },
    { icon: "pi pi-camera", value: "MAHLI" },
    { icon: "pi pi-camera", value: "FHAZ" },
    { icon: "pi pi-video", value: "RHAZ" },
    { icon: "pi pi-camera", value: "MARDI" },
  ];

  export const solRanges = {
    curiosity: { min: 0, max: 4100 }, 
    opportunity: { min: 0, max: 5111 }, 
    spirit: { min: 0, max: 2210 }, 
  };
