
export interface Distributor {
  id: string;
  name: string;
  location: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  whatsapp?: string;
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const regions = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Kitale",
  "Nakuru",
  "Nyeri",
  "Meru",
  "Machakos",
  "Kitui",
  "Narok",
  "Nanyuki"
];

export const distributors: Distributor[] = [
  {
    id: "1",
    name: "Synergy Lubricant Solutions Ltd - Head Office",
    location: "Nairobi",
    region: "Nairobi",
    address: "Unit 3, Kenroid Complex, Imara Daima, Telga Lorupe Road Off Mombasa Road",
    phone: "(+254) 736 210 100",
    email: "info@slusollubes.com",
    whatsapp: "(+254) 748 200 101",
    services: ["Product Sales", "Technical Support", "Delivery"],
    coordinates: {
      lat: -1.3167,
      lng: 36.8167
    }
  },
  {
    id: "2",
    name: "Synergy Lubricant Solutions Ltd - Mombasa",
    location: "Mombasa",
    region: "Mombasa",
    address: "Shimanzi/Zanzibar Road, Opp. Panafrica Syndicate, Mombasa",
    phone: "(+254) 773 394 555",
    email: "depot.msa@slusollubes.com",
    services: ["Product Sales", "Technical Support", "Delivery"],
    coordinates: {
      lat: -4.0435,
      lng: 39.6682
    }
  },
  {
    id: "3",
    name: "Nyanza Enterprises Ltd",
    location: "Kisumu",
    region: "Kisumu",
    address: "Oginga Odinga Street, Kisumu",
    phone: "(+254) 73 363 7111",
    email: "info@nyanzaenterprises.co.ke",
    services: ["Product Sales", "Delivery"],
    coordinates: {
      lat: -0.1022,
      lng: 34.7617
    }
  },
  {
    id: "4",
    name: "North Rift Distributors",
    location: "Eldoret",
    region: "Nakuru",
    address: "Uganda Road, Eldoret Town",
    phone: "(+254) 722 456 789",
    email: "info@northriftdistributors.co.ke",
    services: ["Product Sales", "Delivery", "Technical Support"],
    coordinates: {
      lat: 0.5143,
      lng: 35.2698
    }
  },
  {
    id: "5",
    name: "Central Kenya Lubricants",
    location: "Nyeri",
    region: "Nyeri",
    address: "Kenyatta Road, Nyeri Town",
    phone: "(+254) 715 987 654",
    email: "sales@centralkenyalubricants.co.ke",
    services: ["Product Sales", "Delivery"],
    coordinates: {
      lat: -0.4246,
      lng: 36.9516
    }
  },
  {
    id: "6",
    name: "Eastern Auto Supplies",
    location: "Machakos",
    region: "Machakos",
    address: "Ngei Road, Machakos Town",
    phone: "(+254) 734 567 890",
    email: "info@easternautosupplies.co.ke",
    services: ["Product Sales", "Technical Support"],
    coordinates: {
      lat: -1.5176,
      lng: 37.2675
    }
  },
  {
    id: "7",
    name: "Meru Automotive Centre",
    location: "Meru",
    region: "Meru",
    address: "Cathedral Road, Meru Town",
    phone: "(+254) 745 678 901",
    email: "sales@meruauto.co.ke",
    services: ["Product Sales", "Delivery"],
    coordinates: {
      lat: 0.0465,
      lng: 37.6513
    }
  },
  {
    id: "8",
    name: "South Rift Lubricants",
    location: "Narok",
    region: "Narok",
    address: "Narok-Bomet Road, Narok Town",
    phone: "(+254) 756 789 012",
    email: "info@southriftlubricants.co.ke",
    services: ["Product Sales", "Delivery", "Technical Support"],
    coordinates: {
      lat: -1.0882,
      lng: 35.8712
    }
  },
  {
    id: "9",
    name: "Mount Kenya Auto Parts",
    location: "Nanyuki",
    region: "Nanyuki",
    address: "Kenyatta Highway, Nanyuki Town",
    phone: "(+254) 767 890 123",
    email: "sales@mtkenyadistributors.co.ke",
    services: ["Product Sales", "Delivery"],
    coordinates: {
      lat: 0.0169,
      lng: 37.0741
    }
  },
  {
    id: "10",
    name: "Kitui Motor Spares",
    location: "Kitui",
    region: "Kitui",
    address: "Commercial Street, Kitui Town",
    phone: "(+254) 778 901 234",
    email: "info@kituimotorspares.co.ke",
    services: ["Product Sales"],
    coordinates: {
      lat: -1.367,
      lng: 38.0106
    }
  }
];
