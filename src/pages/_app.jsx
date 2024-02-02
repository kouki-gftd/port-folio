import '/src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    {/* 全てのページに適用 */}

    {/* pagesディレクトリ内各ページの内容が入る */}
    <Component {...pageProps} />

    {/* 全てのページに適用 */}
  </div>
  );
}

export default MyApp;