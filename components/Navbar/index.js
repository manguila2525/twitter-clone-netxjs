import Link from 'next/link';
export default () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="home"><a>Home</a></Link>
          </li>
          <li>
            <Link href="dashboard"><a>Dashboard</a></Link>
          </li>
          <li>
            <Link href="contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
              ul{
          display: flex;
          justify-content:center;
          list-style:none;
          gap:10px;
        }

        li{
          padding: 10px 20px;
          border:solid 1px #399;
          border-radius: 5px;
          cursor:pointer;
        }
        li:hover{
          transform:scale(1.1);
        }
      `}
      </style>
    </>
  )
};
