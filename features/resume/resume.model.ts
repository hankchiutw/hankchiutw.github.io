export interface Resume {
  basics: ResumeBasics;
  work: ResumeWork[];
  imgURL: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  location: Location;
  email: string;
  profiles: Profile[];
}

export interface ResumeWork {
  startDate: string;
  endDate: string;
  website: string;
  company: string;
  thumbnail: string;
  position: string;
  summary: string;
}

export interface Location {
  postalCode: string;
  countryCode: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}
