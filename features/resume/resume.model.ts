export interface Profile {
  basics: ProfileBasics;
  work: ResumeWork[];
  imgURL: string;
}

export interface ProfileBasics {
  name: string;
  label: string;
  location: any;
  email: string;
  profiles: any;
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
