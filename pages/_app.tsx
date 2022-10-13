import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <style jsx>
        {`
          .mx-2 {
            margin-left: 0.5rem;
          }
        `}
      </style>
      <a className='mx-2' href='/'>
        Home
      </a>
      <a className='mx-2' href='/1337'>
        Burner ID: 1337
      </a>
      <a className='mx-2' href='Admin/1337'>
        Admin Burner ID: 1337
      </a>
      <a className='mx-2' href='/Admin'>
        Admin
      </a>
      <br />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
