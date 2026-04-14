interface FooterData {
  header: string;
  details: string[];
}

const footerData: FooterData[] = [
  {
    header: "company",
    details: [
      "About",
      "Careers",
      "Press",
      "Blog",
      "Meet our Instructor",
      "Calm Science",
    ],
  },
  {
    header: "offers",
    details: ["Buy a Gift", "Redeem a Gift", "Family Plan"],
  },
  {
    header: "Calm for Organizations",
    details: ["Organizations under 300", "Organizations 300+"],
  },
  {
    header: "help",
    details: [
      "FAQ",
      "Contact Us",
      "Terms",
      "Privacy Police",
      "Consumer Health Data",
      "CCPA Notice",
      "Opt Out of Targeted Ads",
      "Cookies",
      "Accessibility Statement",
      "Virtual Patent Marking",
    ],
  },
];
interface Socials {
  id: string;
  icon: React.ReactNode;
}

const socials: Socials[] = [
  {
    id: "facebook-icon",
    icon: <FacebookIcon className="footer-icon" />,
  },
  {
    id: "instagram-icon",
    icon: <InstagramIcon className="footer-icon" />,
  },
  {
    id: "twitter-icon",
    icon: <TwitterIcon className="footer-icon" />,
  },
];

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <ul>
          {footerData.map((data, index) => (
            <li key={index}>
              <div className="footer-content">
                <h2>{data.header}</h2>
                <div className="links">
                  {data.details.map((detail, indexDetail) => (
                    <li key={indexDetail}>
                      <a href="#">{detail}</a>
                    </li>
                  ))}
                </div>
              </div>
            </li>
          ))}
          <ul className="social-icons">
            {socials.map((data) => (
              <li key={data.id}>{data.icon}</li>
            ))}
          </ul>
        </ul>
      </div>
      <div className="copyright">
        Copyright © 2026 Calm. All rights reserved
      </div>
    </>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path>
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path>
      <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path>
      <circle cx="393.6" cy="118.4" r="17.056"></circle>
    </svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
    </svg>
  );
}
