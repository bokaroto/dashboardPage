export type THeaderForRewards = {
  header: {
    name: string;
    sum: string | number;
    claimable: string | number;
    image: string;
  };
};

export type THeaderForValue = {
  header: {
    name: string;
    sum: string | number;
    image: string;
  };
};

export type THeaderForToken = {
  header: {
    name: string;
    sum: string | number;
  };
};

export type TContentForRewards = {
  items: [
    {
      id: string | number;
      pool: string;
      poolImgs: string[];
      poolPrice: string | number;
      rewards: [
        {
          image: string;
          name: string;
          sum: string | number;
        }
      ];
      value: string | number;
    }
  ];
};

export type TContentForToken = {
  items: [
    {
      id: string | number;
      token: string;
      balance: string | number;
      price: string | number;
      value: string | number;
      image: string;
    }
  ];
};

export type TContentForValue = {
  items: [
    {
      id: string | number;
      pool: string;
      image: string;
      poolPrice: string | number;
      value: string | number;
    }
  ];
};

export type TSingleWalletCard = {
  id: string | number;
  name: string;
  secondName: string;
  balance: string | number;
  price: string | number;
  value: string | number;
  image: string;
};

export type TSingleNetWorthCard = {
  name: string;
  sum: string | number;
};

export type TSingleTransactionHistoryCard = {
  id: string;
  date: string;
  time: string;
  details: {
    action: string;
    sum: string | number;
    transaction: string;
  };
  txnFee: string | number;
  currency: string;
  money: string | number;
};

export type TDoughnutChartModuleProps = {
  title: string;
  currency: string;
  myData: Array<{
    label: string;
    data: {
      balance: number;
      value: number;
      ratio: number;
    };
    imageSrc: string;
  }>;
};

export type TDoughnutWidgetProps = {
  data: Array<{
    label: string;
    data: {
      balance: number;
      value: number;
      ratio: number;
    };
    imageSrc: string;
  }>;
  cutout?: number;
  position?:
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
    | 'center'
    | 'chartArea'
    | undefined;
  currency?: string;
};
