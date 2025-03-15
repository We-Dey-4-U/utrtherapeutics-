import React from "react";

const faq = () => {
  return (
    <section id="faq" class="faq pos-rel pt-140 pb-105">
      <div class="container">
        <div class="sec-title text-center mb-35">
          <h5 class="sec-title__subtitle">FAQ</h5>
          <h2 class="sec-title__title">Frequently asked questions</h2>
        </div>
        <div class="faq__wrap">
          <ul class="accordion_box clearfix">
          <li class="accordion block active-block">
  <div class="acc-btn">
    <span>QA : 01</span> How is this ICO project different from other 
    blockchain ventures?
  </div>
  <div class="acc_body current">
    <div class="content">
      <p>
        UTR Therapeutics Inc. stands apart from other blockchain ventures by 
        integrating cutting-edge biotechnology with decentralized finance. 
        Unlike traditional ICOs that focus solely on digital assets, UTRX tokens 
        represent a groundbreaking hybrid model that bridges biotech innovation 
        with blockchain technology.
      </p>
      <ul>
        <li>First-in-class mRNA overwriting technology for treating deadly cancers</li>
        <li>Real-world asset-backed tokenization, tying blockchain to tangible biotech advancements</li>
        <li>Strategic allocation of 10 million shares into blockchain, enhancing investor confidence</li>
      </ul>
      <p>
        By merging biotech breakthroughs with blockchain, UTR is redefining both 
        industries, offering a unique opportunity for investors and stakeholders.  
        <br />
        To learn more about our vision and investment potential, 
        <a href="#!">Contact us</a> today.
      </p>
    </div>
  </div>
</li>
<li class="accordion block">
  <div class="acc-btn">
    <span>QA : 02</span> What security measures are in place to 
    protect ICO participants' investments <br />
    and participate in the ICO?
  </div>
  <div class="acc_body">
    <div class="content">
      <p>
        Security is a top priority for UTRX token holders. To ensure maximum 
        protection, we have integrated our ICO with MetaMask, one of the most 
        trusted and widely used cryptocurrency wallets.
      </p>
      <ul>
        <li>MetaMask provides secure, non-custodial storage for UTRX tokens, giving users full control over their assets.</li>
        <li>Private keys are encrypted and stored locally, ensuring no third party has access to your funds.</li>
        <li>Blockchain technology ensures transparency, immutability, and protection against fraud.</li>
      </ul>
      <p>
        By using MetaMask, ICO participants benefit from enterprise-grade security, 
        protecting their investments while enjoying seamless transactions.  
        <br />
        <a href="#!">Learn more</a> about how to participate securely in our ICO.
      </p>
    </div>
  </div>
</li>
<li class="accordion block">
  <div class="acc-btn">
    <span>QA : 03</span> What is the purpose and vision behind this 
    ICO project?
  </div>
  <div class="acc_body">
    <div class="content">
      <p>
        UTR Therapeutics is pioneering the future of cancer treatment with its 
        first-in-class mRNA overwriting technology. By leveraging blockchain 
        through the UTRX token, we aim to democratize access to groundbreaking 
        biotech innovations and enhance investment transparency.
      </p>
      <ul>
        <li>Funding the development of next-generation cancer treatments.</li>
        <li>Bridging traditional finance with blockchain to maximize investor confidence.</li>
        <li>Creating a sustainable ecosystem for biotech innovation.</li>
      </ul>
      <p>
        Our vision is to revolutionize the biotech industry by integrating decentralized 
        finance, allowing investors to participate securely and transparently in the 
        future of medicine. <br />
        <a href="#!">Learn more</a> about how UTRX is changing the landscape of biotech investments.
      </p>
    </div>
  </div>
</li>
<li class="accordion block">
  <div class="acc-btn">
    <span>QA : 04</span> How can I secure and store my purchased ICO 
    tokens?
  </div>
  <div class="acc_body">
    <div class="content">
      <p>
        To ensure the safety of your UTRX tokens, we recommend using a 
        secure and reputable wallet. The best option is MetaMask, a widely 
        trusted and decentralized wallet that provides full control over your 
        assets.
      </p>
      <ul>
        <li>
          <strong>MetaMask Wallet:</strong> Store your UTRX tokens securely in 
          MetaMask, ensuring easy access and full ownership.
        </li>
        <li>
          <strong>Private Key & Seed Phrase:</strong> Never share your private 
          key or seed phrase with anyone. Store it safely offline to prevent hacks.
        </li>
        <li>
          <strong>Hardware Wallets:</strong> For maximum security, consider using 
          a hardware wallet like Ledger or Trezor to store your tokens offline.
        </li>
        <li>
          <strong>Official Smart Contract Address:</strong> Always verify the 
          correct smart contract address before making transactions.
        </li>
      </ul>
      <p>
        By following these security practices, you can confidently store and 
        manage your UTRX tokens while ensuring protection against unauthorized 
        access. <br />
        <a href="#!">Learn more</a> about securing your digital assets.
      </p>
    </div>
  </div>
</li>

<li class="accordion block">
  <div class="acc-btn">
    <span>QA : 05</span> How can I purchase tokens through your application using MetaMask?
  </div>
  <div class="acc_body">
    <div class="content">
      <p>
        To purchase tokens through our application using MetaMask, follow these simple steps:
      </p>
      <ul>
        <li>
          <strong>Install MetaMask:</strong> Download and install MetaMask as a browser extension (Chrome, Firefox, Edge) or mobile app (iOS, Android).
        </li>
        <li>
          <strong>Create a Wallet:</strong> Set up a new wallet in MetaMask and securely back up your Secret Recovery Phrase.
        </li>
        <li>
          <strong>Connect to Our Application:</strong> Click the "Connect Wallet" button on our website and approve the connection request in MetaMask.
        </li>
        <li>
          <strong>Purchase Tokens:</strong> Enter the desired token amount, review the transaction details, and confirm the purchase in MetaMask.
        </li>
        <li>
          <strong>Transaction Confirmation:</strong> Wait for the blockchain to process the transaction. You can track its status in MetaMask or a blockchain explorer.
        </li>
      </ul>
      <p>
        Make sure you have sufficient funds in your MetaMask wallet to cover both the token cost and transaction fees. <br />
        <a href="#!">Learn more</a> about purchasing tokens securely.
      </p>
    </div>
  </div>
</li>
          </ul>
        </div>
      </div>
      <div class="faq__sec-shape">
        <div class="shape shape--1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div class="shape shape--2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default faq;
