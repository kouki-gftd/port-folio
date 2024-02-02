import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "public/logo.png"

const ITEMS = ["about","skills","values","future"];

export const Header = () => {
  return (
    <> 
      <header>
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              {/** Next.js 13以降からはリンクコンポーネント内にaタグをネストする必要はなくなった */}
              <Image src={logoImg} alt="ロゴ" width="240" height="120" placeholder="blur" />
            </Link>
  
            <nav>
              <ul className="flex text-text-green">
                {ITEMS.map((item) => {
                  return (
                    <li key={item} className="mr-4 last:mr-0">
                      <a href={`#${item}`} className="uppercase">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;