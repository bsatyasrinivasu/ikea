"use client"
import useNavigation from '../hooks/useNavigation';

const Footer = () => {
  const { navigation, socials } = useNavigation();

  return (



    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-black hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="text-gray-400 flex justify- space-x-8">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-7 w-7" aria-hidden="true" />
            </a>
          ))}

        </div >
          <div className='py-[15px] mr-[10px]'>
            <img src="bdr.png" alt="" className='h-[40px] w-[]'/>
          </div>
        <p className="mt-8 text- text-base text-black">
          &copy;  Inter IKEA Systems B.V. 1999-2024

.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
