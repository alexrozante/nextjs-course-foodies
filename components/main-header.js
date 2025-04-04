import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import Link from "next/link";
import NavLink from "@/components/nav-link";

export default function MainHeader({params}) {

  return (
    <>
      <header className={classes.header}>
        <Link
          href='/'
          className={classes.logo}
        >
          <Image
            src={logoImg}
            alt='A plate with food'
            priority
          />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["header-background"]}>
        <svg
          className={classes.svg}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <defs>
            <linearGradient
              id='gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='0%'
            >
              <stop
                offset='0%'
                style={{ stopColor: '#59453c', stopOpacity: '1' }}
              />
              <stop
                offset='100%'
                style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
              />
            </linearGradient>
          </defs>
          <path
            fill='url(#gradient)'
            d='M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
      </div>
    </>
  );
}