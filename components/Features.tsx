  const features = [
    {
      name: 'Join ikea Family',
      descriptions:[
        'Bring your ideas to life with special discounts, inspiration, and lots of good things in store. Its all free.' ]
      ,
    },
    {

       name: 'Our services',
      descriptions:
        ['Decathlon for shoes',' Decathlon for clothes','Decathlon for Sport Clubs','Decathlon Gift Cards','Installation & Assembly Services']
        },

    {
      name: 'ABOUT US',
      descriptions:
      ['Who we are','Decathlon CSR','Careers','Newsroom','Made In India']

    },
      {
      name: 'ABOUT US',
      descriptions:
      ['Who we are','Decathlon CSR','Careers','Newsroom','Made In India']

    },
    {
      name:'LEGAL',
      descriptions :
      ['Return Policy','Terms and Conditions','Privacy Policy','"No Franchise" Public Notice']
    },
  ];

  const Features = () => {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl ">
          <h2 className=""></h2>
          <dl className=" gap-16 lg:grid lg:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-decathlon-500 text-white">
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                  {feature.descriptions?.map(i =><dd className="mt-1 text-base leading-7 text-gray-600">{i} </dd>)}
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };

  export default Features;
