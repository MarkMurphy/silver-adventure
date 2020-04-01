import Head from 'next/head';
import useRequest from '../hooks/useRequest';
import Billboard from '../components/Billboard';

const Home = () => {
  const { data, error } = useRequest('/discover/movie', {
    sortBy: 'popularity.desc'
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const [movie, ...movies] = data.results;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Billboard {...movie} />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
