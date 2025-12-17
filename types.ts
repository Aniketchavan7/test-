export interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  specs?: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  products: Product[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  category: 'Precision' | 'Energy' | 'Manufacturing' | 'Infrastructure' | 'Technology' | 'Tooling';
  shortDescription: string;
  fullDescription: string;
  image: string;
  partners: Partner[];
}

export interface EnquiryFormValues {
  name: string;
  contactNumber: string;
  email: string;
  industry: string;
  company?: string;
  product?: string;
  message: string;
}