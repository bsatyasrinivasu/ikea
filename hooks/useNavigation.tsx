"use client"
import React, { SVGProps, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function useNavigation() {
  const navigation = useMemo(() => {
    return [


    ];
  }, []);

  const socials = useMemo(() => {
    return [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/IKEAUSA',
        icon: (props: SVGProps<any>) => (
         <FaFacebook />
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/IKEAUSA/',
        icon: (props: SVGProps<any>) => (
          <FaInstagram />
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/DecathlonUK',
        icon: (props: SVGProps<any>) => (
          <FaPinterest />


        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/DecathlonUK',
        icon: (props: SVGProps<any>) => (
         <FaXTwitter />
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/DecathlonUK',
        icon: (props: SVGProps<any>) => (
          <FaYoutube />


        ),

      },

    ];

  }, []);


  const pathname = usePathname();
  const isCurrentPathname = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]

  );

  return {
    isCurrentPathname,
    navigation,
    socials,
    
  };
}
