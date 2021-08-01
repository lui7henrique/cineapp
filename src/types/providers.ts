export type ProviderType = {
  id: number;
  results: {
    [language: string]: Provider;
  };
};

export type Provider = {
  link: string;
  flatrate?: [
    {
      display_priority: number;
      logo_path: string;
      provider_id: number;
      provider_name: string;
    }
  ];
  buy?: [
    {
      display_priority: number;
      logo_path: string;
      provider_id: number;
      provider_name: string;
    }
  ];
  rent?: [
    {
      display_priority: number;
      logo_path: string;
      provider_id: number;
      provider_name: string;
    }
  ];
};
