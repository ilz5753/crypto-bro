import CurrenciesBnbLogo from "./bnb/logo";
import CurrenciesBtcLogo from "./btc/logo";
import CurrenciesEthLogo from "./eth/logo";
import CurrenciesUsdtColorful from "./usdt/colorful";
import CurrenciesUsdtDark from "./usdt/dark";
import {
  CurrenciesUsdtUserProfileHeavy,
  CurrenciesUsdtUserProfileLight,
} from "./usdt/userProfile";

export const Currencies = {
  btc: {
    logo: {
      Icon: CurrenciesBtcLogo,
      props: {
        bg: "#EF8E19",
        color: "#FFFFFF",
      },
    },
    colorful: {
      Icon: CurrenciesUsdtColorful, // change to Btc
      props: {
        red: "#FF4842",
        green: "#6DD64D",
      },
    },
    dark: {
      Icon: CurrenciesUsdtDark, // change to Btc
    },
    UserProfile: {
      Heavy: CurrenciesUsdtUserProfileHeavy, // change to Btc
      Light: CurrenciesUsdtUserProfileLight, // change to Btc
      props: {
        color: "#FFFFFF",
      },
    },
    name: "Bitcoin",
    unit: "BTC",
  },
  eth: {
    logo: {
      Icon: CurrenciesEthLogo, // change to Eth
      props: {
        bg: "#636890",
        color: "#FFFFFF",
      },
    },
    colorful: {
      Icon: CurrenciesUsdtColorful,
      props: {
        red: "#FF4842",
        green: "#6DD64D",
      },
    },
    dark: {
      Icon: CurrenciesUsdtDark, // change to Eth
    },
    UserProfile: {
      Heavy: CurrenciesUsdtUserProfileHeavy, // change to Eth
      Light: CurrenciesUsdtUserProfileLight, // change to Eth
      props: {
        color: "#FFFFFF",
      },
    },
    name: "Ethereum",
    unit: "ETH",
  },
  bnb: {
    logo: {
      Icon: CurrenciesBnbLogo,
      props: {
        bg: "#F0B90B",
        color: "#FFFFFF",
      },
    },
    colorful: {
      Icon: CurrenciesUsdtColorful, // change to Bnb
      props: {
        red: "#FF4842",
        green: "#6DD64D",
      },
    },
    dark: {
      Icon: CurrenciesUsdtDark, // change to Bnb
    },
    UserProfile: {
      Heavy: CurrenciesUsdtUserProfileHeavy, // change to Bnb
      Light: CurrenciesUsdtUserProfileLight, // change to Bnb
      props: {
        color: "#FFFFFF",
      },
    },
    name: "Binance",
    unit: "BNB",
  },
  usdt: {
    logo: {
      Icon: CurrenciesBnbLogo,
      props: {
        bg: "#F0B90B",
        color: "#FFFFFF",
      },
    },
    colorful: {
      Icon: CurrenciesUsdtColorful,
      props: {
        red: "#FF4842",
        green: "#6DD64D",
      },
    },
    dark: {
      Icon: CurrenciesUsdtDark,
    },
    UserProfile: {
      Heavy: CurrenciesUsdtUserProfileHeavy,
      Light: CurrenciesUsdtUserProfileLight,
      props: {
        color: "#FFFFFF",
      },
    },
    name: "Tron",
    unit: "USDT",
  },
};
export type TCurrency = keyof typeof Currencies;
