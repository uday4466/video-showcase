import Head from 'next/head';
import Video from '../components/Video';

export default function Home() {
  const videos = [
    { title: 'Video 1', src: '/sample1.mp4' },
    { title: 'Video 2', src: '/sample2.mp4' },
    { title: 'Video 3', src: '/sample3.mp4' },
  ];

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-center">SAMPLE VIDEOS</h1>

      <Video videos={videos} />
    </div>
  );
}