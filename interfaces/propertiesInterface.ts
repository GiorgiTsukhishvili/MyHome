interface PropertiesLocation {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
}

interface PropertiesCategory extends PropertiesLocation {
  nameSingular: string;
  nameSingular_l1: string;
}

interface PropertiesInner {
  value: string;
  matchLevel: string;
  matchedWords: string[];
}

export interface PropertiesPhotos {
  id: number;
  externalID: string;
  title: string | null;
  orderIndex: number;
  nimaScore: number;
  url: string;
}

interface Amenities {
  amenities: { text: string }[];
}

export interface PropertiesInterface {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  geography: {
    lat: number;
    lng: number;
  };
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber: string;
  projectNumber: number | null;
  title: string;
  title_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  location: PropertiesLocation[];
  category: PropertiesCategory[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  coverPhoto: {
    id: number;
    externalID: string;
    title: string | null;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
  };
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: {
    mobile: string;
    whatsapp: string;
    proxyMobile: string;
    mobileNumbers: string[];
  };
  contactName: string;
  agency: {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: {
      number: string;
      authority: string;
    }[];
    logo: {
      id: number;
      url: string;
    };
    slug: string;
    slug_l1: string;
    tr: number;
    tier: number;
    roles: string[];
    active: boolean;
    createdAt: string;
    commercialNumber: string | number | null;
    shortNumber: string | number | null;
  };
  hash: string;
  keywords: string[];
  isVerified: true;
  verification: {
    updatedAt: number;
    eligible: boolean;
    status: string;
    verifiedAt: number;
  };
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  floorPlanID: string | number | null;
  furnishingStatus: string;
  extraFields: {
    dldBuildingNK: string;
    dldPropertySK: string;
  };
  type: string;
  hasTransactionHistory: boolean;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  objectID: string;
  _highlightResult: {
    referenceNumber: PropertiesInner;
    title: PropertiesInner;
    externalID: PropertiesInner;
    agency: {
      name: PropertiesInner;
    };
    keywords: PropertiesInner[];
  };
  description?: string;
  amenities?: Amenities[];
  photos?: PropertiesPhotos[];
}

export interface PropertiesForRentAndSale {
  propertiesForSale: PropertiesInterface[];
  propertiesForRent: PropertiesInterface[];
}
