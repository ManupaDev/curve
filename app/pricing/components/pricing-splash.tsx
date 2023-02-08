function PricingSplash() {
  return (
    <div className="min-h-screen flex flex-col justify-center border border-black">
      <div>
        <h1 className="  text-4xl text-center">Our pricing is clear as a sunny day.☀️</h1>
        <h1 className="text-center text-2xl font-normal  ">No hidden fees. No surprises.</h1>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <button type="button" className="  button-border-1 w-44 text-xl rounded-2xl px-4 py-2">
          For Businesses
        </button>
        <button type="button" className="  button-border-1 w-44 text-xl mt-4 rounded-2xl px-4 py-2">
          For Start-ups
        </button>
      </div>
    </div>
  );
}

export default PricingSplash;
