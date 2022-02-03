import Link from 'next/link';
import StyleGlobal from '../../components/StyleGlobal';
const Dashboard = ({ Title }) => {
  return (
    <>
      <StyleGlobal>
        <h1>My first Page with Next Js <span><Link href="/"><a>Return to Home Page</a></Link></span></h1>
        <h2>{Title}</h2>
      </StyleGlobal>

      <style jsx>
        {`
      span{
        text-decoration:underline;
      }
    `}
      </style>
    </>
  )
};

Dashboard.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  return await res.json()
}

export default Dashboard