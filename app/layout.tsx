import './globals.css';
import {ReactNode} from 'react';
export const metadata={title:'RIVIERA PLUS TRAVEL AGENCY',description:'Antalya tours and experiences'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="tr"><body>{children}</body></html>}
