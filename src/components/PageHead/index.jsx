import Head from "next/head";

export const PageHead = ({
  title       = "HOME",
  description = "IT業界に転職するためプログラミングを全力で楽しく学習しています。"
}) => {
  return (
    <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {/** ページタイトル | サイトの名前 */}
        {title} | {process.env.NEXT_PUBLIC_SITE_NAME}
      </title>
      <meta name="description" content={description}/>
      <meta property="og:title" content="HOME | ポートフォリオサイト" />
      <meta 
      property="og:description"
      content="IT業界に転職するためプログラミングを全力で楽しく学習しています。"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:image" content="https://example.com/ogp.png" />
      <meta property="og:site_name" content="ポートフォリオサイト" />

      {/** Facebook */}
      <meta property="fb:app_id" content="Facebookのapp_idを入手" />

      {/** Twitter */}
      <meta name="twitter:card" content="summary"/>
    </Head>
  );
};

export default PageHead;