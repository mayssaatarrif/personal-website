// types.ts
export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  imageURL: string;
  
}

export interface PublicationProps {
  title: string;
  publishingYear: number;
  language: string;
  description: string;
  coverImage: string;
}
// type.ts


export interface TheatricalProps {
  coverImage: string;
  title: string;
  description: string; // Array of theatrical works
  initialPage?: number; // Optional initial page number
}

export interface LocalInitiative {
  image: string; // Image for the initiative
  title: string; // Title of the initiative
  date: string;
  description: string; // Description of the initiative
}

export interface LocalInitiativesPage {
  initiatives: LocalInitiative[]; // Array of local initiatives for each page
}

export interface LocalInitiativesProps {
  currentPage: number; // Current page number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>; // Setter for page state
}


export interface Initiative {
  image: string;
  title: string;
  date: string;
  description: string;
}
export interface InitiativesPage {
  initiatives: Initiative[]; // Array of local initiatives for each page
}

export interface InitiativesProps {
  currentPage: number; // Current page number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>; // Setter for page state
}

