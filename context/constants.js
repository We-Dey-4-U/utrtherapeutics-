
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";

//IMPORT CONTRACT ABI
import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";

//minted token contract address
//0x1A5634880575738EA5fEEf590880d76508Dff225
export const TOKEN_ADDRESS = "0xCbE4Ed2A09013421ff104F9484f59a3f9172afFF";
export const ERC20_ABI = erc20.abi;

//Account address use in deploying the contracts
// 0x5627e3921Cf8a49Da5De582077c5F1a315780564
//contrcat address for this account  0xb4E63682924f7Fb0a17Be3342d512f558aEAaDA1
export const OWNER_ADDRESS = "0x7Feea69C343A03f6a3A5Fe2910A01107D2E33417";

//ico contract address
//contrct adddress with max buy...0xDFd131De06f2631519A2158aD566B0c2182B9f7c
/// max contact token address   0xCbE4Ed2A09013421ff104F9484f59a3f9172afFF
// account addres owner  0x7Feea69C343A03f6a3A5Fe2910A01107D2E33417
export const CONTRACT_ADDRESS = "0xDFd131De06f2631519A2158aD566B0c2182B9f7c";
export const CONTRACT_ABI = tokenICO.abi;

//NETWORK CONFIGURATION
const networks = {
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`, //Converts 80002 to hex format
    chainName: "Polygon Amoy", // Custom name for your network
    nativeCurrency: {
      name: "MATIC", // Standard name for Polygon's native currency
      symbol: "MATIC", // Ensure this matches MetaMask's expectation for the native token
      decimals: 18, // Standard for most tokens
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"], // Replace with a valid RPC URL for the network
    blockExplorerUrls: ["https://www.oklink.com/amoy"], // Replace with a valid block explorer URL
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`, // Converts 137 to hex format
    chainName: "Polygon Mainnet", // Mainnet name
    nativeCurrency: {
      name: "MATIC", // Correct native currency name for Polygon
      symbol: "MATIC", // Correct symbol expected by MetaMask
      decimals: 18, // Standard for most tokens
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"], // Valid RPC URL
    blockExplorerUrls: ["https://polygonscan.com/"], // Valid block explorer URL
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  bscTestnet: {
    chainId: `0x${Number(97).toString(16)}`, // Chain ID 97 in hex = "0x61"
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"], // Testnet RPC
    blockExplorerUrls: ["https://testnet.bscscan.com"], // Testnet Explorer
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "polygon_amoy";
  await changeNetwork({ networkName });
};

export const CHECK_WALLET_CONNECTED = async () => {
  if (!window.ethereum) return console.log("Please Install MetaMask");
  const network = await handleNetworkSwitch();

  const account = await window.ethereum.request({ method: "eth_accounts" });

  if (account.length) {
    return account[0];
  } else {
    console.log("Please Install MetaMask & Connect, Reload");
  }
};

export const CONNECT_WALLET = async () => {
  try {
    if (!window.ethereum) return alert("Please install MetaMask");
    const network = await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    window.location.reload();
    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

//---FETCHING SMART CONTRACT

const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);



export const TOKEN_ICO_CONTRACT = async () => {
  try {
    const web3Modal = new Web3Modal();
   // web3Modal.clearCachedProvider(); // Clear cached provider to ensure fresh connection Keep it if you want users to manually reconnect every time. Remove it if you want a smoother user experience with automatic reconnection
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};




export const ERC20 = async (ADDRESS) => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const newtork = await provider.getNetwork();

    const signer = provider.getSigner();
    const contract = fetchContract(ADDRESS, ERC20_ABI, signer);

    //USER ADDRESS
    const userAddress = signer.getAddress();
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;

    const token = {
      address: address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply: ethers.utils.formatEther(supply.toString()),
      balance: ethers.utils.formatEther(balance.toString()),
      chainId: newtork.chainId,
    };
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const ERC20_CONTRACT = async (CONTRACT_ADDRESS) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(CONTRACT_ADDRESS, ERC20_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const GET_BALANCE = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const maticBal = await signer.getBalance();
    return ethers.utils.formatEther(maticBal.toString());
  } catch (error) {
    console.log(error);
  }
};

export const CHECK_ACCOUNT_BALANCE = async (ADDRESS) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const maticBal = await provider.getBalance(ADDRESS);

    return ethers.utils.formatEther(maticBal.toString());
  } catch (error) {
    console.log(error);
  }
};

export const addTokenToMetaMask = async () => {
  if (window.ethereum) {
    const tokenDeatils = await ERC20(TOKEN_ADDRESS);

    const tokenDecimals = tokenDeatils?.decimals;
    const tokenAddress = TOKEN_ADDRESS;
    const tokenSymbol = tokenDeatils?.symbol;
    //https://i.postimg.cc/SKLRxSPB/utrgold.png
    //https://i.postimg.cc/2SdhrqyS/inx-logotoken-removebg-preview.png
    //https://i.postimg.cc/HLj8S4n9/utrcoin.png
    const tokenImage =
      "https://i.postimg.cc/HLj8S4n9/utrcoin.png";

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        return "Token added!";
      } else {
        return "Token not added";
      }
    } catch (error) {
      return "Failed to add";
    }
  } else {
    return "MetaMask is not installed";
  }
};
