const Subscription = () => {
  return (
    <div className="subscription-banner pt-20 ">
      <h2 className=" my-10 text-2xl lg:text-3xl text-center">🎉 Subscribe Now for Exclusive Benefits! 🎉</h2>
      <p>Unlock Premium Content and Features Today!</p>
      <ul>
        <li>➡️ Access to Exclusive Articles, Videos, and Resources</li>
        <li>➡️ Ad-Free Browsing Experience</li>
        <li>➡️ Priority Customer Support</li>
        <li>➡️ Early Access to New Features</li>
      </ul>
      <button>Subscribe Now</button>
      <div className="payment-gateway-icons">
        {/* Insert Payment Gateway Icons here */}
      </div>
    </div>
  );
};

export default Subscription;
