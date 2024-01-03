import { Lato, Montserrat, Raleway, Roboto } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--montserrat' });

export const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  variable: '--raleway',
  weight: ['300'],
});
