function CTA() {
  return (
    <div className="py-10 border border-black">
      <h1 className="text-2xl text-center">
        Interested in getting the deets or pricing info?
        <br />
        <span>Just click away</span>
      </h1>
      <div className="mt-8 flex flex-col items-center gap ">
        <button type="button" className="button-border-1 text-xl rounded-2xl px-4 py-2">
          Pricing
        </button>
        <button type="button" className="button-border-1 text-xl rounded-2xl px-4 py-2 mt-4">
          Drop a message
        </button>
      </div>
    </div>
  );
}

export default CTA;
