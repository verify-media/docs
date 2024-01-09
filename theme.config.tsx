import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="29" height="29"/>
        <g id="logo dark">
        <path id="Vector" d="M14.483 16.4641V26.3777" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square" strokeLinejoin="round"/>
        <path id="Vector_2" d="M8.96493 21.6426L14.5364 27.214L20.1078 21.6426" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square"/>
        <path id="Vector_3" d="M14.483 12.0347L14.483 2.29689" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square" strokeLinejoin="round"/>
        <path id="Vector_4" d="M20.1415 6.7854L14.57 1.21397L8.9986 6.7854" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square"/>
        <path id="Vector_5" d="M16.6975 14.2493L26.365 14.2493" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square" strokeLinejoin="round"/>
        <path id="Vector_6" d="M21.9462 19.7674L27.5177 14.1959L21.9462 8.62451" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square"/>
        <path id="Vector_7" d="M12.2684 14.2493L3.05797 14.2493" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square" strokeLinejoin="round"/>
        <path id="Vector_8" d="M7.08954 8.59054L1.51811 14.162L7.08954 19.7334" stroke="currentColor" strokeWidth="1.59184" strokeLinecap="square"/>
        </g>
      </svg>
      <span style={{ marginLeft: '.4em'}}>VERIFY</span>
    </>,
  project: {
    link: "https://github.com/verify-media",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25" version="1.1"> <path fill="currentColor" d="M 12.5 0 C 19.40625 0 25 5.59375 25 12.5 C 25 17.871094 21.574219 22.640625 16.484375 24.359375 C 15.859375 24.484375 15.625 24.09375 15.625 23.765625 C 15.625 23.34375 15.640625 22 15.640625 20.328125 C 15.640625 19.15625 15.25 18.40625 14.796875 18.015625 C 17.578125 17.703125 20.5 16.640625 20.5 11.84375 C 20.5 10.46875 20.015625 9.359375 19.21875 8.484375 C 19.34375 8.171875 19.78125 6.890625 19.09375 5.171875 C 19.09375 5.171875 18.046875 4.828125 15.65625 6.453125 C 14.65625 6.171875 13.59375 6.03125 12.53125 6.03125 C 11.46875 6.03125 10.40625 6.171875 9.40625 6.453125 C 7.015625 4.84375 5.96875 5.171875 5.96875 5.171875 C 5.28125 6.890625 5.71875 8.171875 5.84375 8.484375 C 5.046875 9.359375 4.5625 10.484375 4.5625 11.84375 C 4.5625 16.625 7.46875 17.703125 10.25 18.015625 C 9.890625 18.328125 9.5625 18.875 9.453125 19.6875 C 8.734375 20.015625 6.9375 20.546875 5.8125 18.65625 C 5.578125 18.28125 4.875 17.359375 3.890625 17.375 C 2.84375 17.390625 3.46875 17.96875 3.90625 18.203125 C 4.4375 18.5 5.046875 19.609375 5.1875 19.96875 C 5.4375 20.671875 6.25 22.015625 9.390625 21.4375 C 9.390625 22.484375 9.40625 23.46875 9.40625 23.765625 C 9.40625 24.09375 9.171875 24.46875 8.546875 24.359375 C 3.441406 22.660156 -0.00390625 17.882812 0 12.5 C 0 5.59375 5.59375 0 12.5 0 Z M 12.5 0 "/>

</svg>
    )
  },
  head: <><link rel="shortcut icon" href="/favicon.svg" /></>,
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://www.bcl.xyz/">
        Blockchain Creative Labs
      </a>
        <span style={{
          marginLeft: "2em",
        }}>
          <a href="https://www.verifymedia.com/terms-of-service.html" color="white">
            Terms of Service
          </a>
          <a href="https://www.verifymedia.com/privacy-policy.html" style={{
            marginLeft: "2em"
          }}>
          Privacy Policy
          </a>
        </span>
      </span>,
  },
  docsRepositoryBase: "https://github.com/verify-media/docs/tree/main/",
  useNextSeoProps() {
    return {
      titleTemplate: 'VERIFY: %s'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false
  }
};

export default config;
