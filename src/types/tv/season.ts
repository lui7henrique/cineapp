export type Season = {
  _id: string;
  air_date: string;
  episodes: [
    {
      id: number;
      name: string;
      overview: string;
      production_code: string;
      season_number: number;
      still_path: string;
      vote_average: number;
      vote_count: number;
      crew: [
        {
          job: string;
          department: string;
          credit_id: string;
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string;
        }
      ];
      guest_stars: [
        {
          character: string;
          credit_id: string;
          order: number;
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string;
        }
      ];
    }
  ];
};

export type SimpleSeason = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};
