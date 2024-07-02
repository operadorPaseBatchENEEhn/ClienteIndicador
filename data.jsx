import {Facebook,House,BookCopy,Moon,Sunrise,Hourglass,Linkedin} from "lucide-react";
export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/company/eneedistribucion/",
    },
    {
        id: 2,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://web.facebook.com/enee.utcd?mibextid=qi2Omg&rdid=4vQYF5QJ0KUNPvsd&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F4Ky44frzgFYKvd3Q%2F%3Fmibextid%3Dqi2Omg%26_rdc%3D1%26_rdr",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <House size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Generacion Lecturas",
        icon: <BookCopy size={25} color="#fff" strokeWidth={1} />,
        link: "/GeneracionLecturas",
    },
    {
        id: 3,
        title: "Antes Pase Noche",
        icon: <Moon size={25} color="#fff" strokeWidth={1} />,
        link: "/AntesPaseNoche",
    },
    {
        id: 4,
        title: "Durante Pase Noche",
        icon: <Hourglass size={25} color="#fff" strokeWidth={1} />,
        link: "/DurantePaseNoche",
    },
    {
        id: 5,
        title: "Post Pase Noche",
        icon: <Sunrise size={25} color="#fff" strokeWidth={1} />,
        link: "/PostPaseNoche",
    },
]; 