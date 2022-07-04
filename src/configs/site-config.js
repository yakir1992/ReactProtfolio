import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Yakir Ben Harosh. All Rights Reserved.`,
  author: {
    name: 'Yakir Ben Harosh',
    accounts: [
      {
        url: 'https://github.com/yakir1992/',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/yakir1992',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://www.linkedin.com/in/yakir1992/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'mailto:yakir1992@gmail.com',
        label: 'Mail Yakir',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
