export interface PeopleInterface {
  name: string;
  popularity: string;
  known_for_department: string;
  profile_path: string;
}

export interface PeopleResults {
  results: PeopleInterface[] | undefined;
}