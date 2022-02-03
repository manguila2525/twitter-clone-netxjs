import { fonts, colors, breakpoints } from '../../styles/theme';

export default ({ children }) => {
  return (
    <>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx global>{`
      body{
        padding:0;
        margin:0;
        font-family:${fonts.base};
      }
      a{
        text-decoration:none;
        color:${colors.primary};
      }
      div{
        background:#ccc4d;
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      main{
        background:#fff;
        border-radius:10px;
        width:100%;
        height:100%;
        box-shadow:0 10px 25px rgba(0, 0, 0, .1);
      }

      @media (min-width: ${breakpoints.mobile}){
        main{
          width: ${breakpoints.mobile};
          height:90vh;
        }
      }
    `}</style>
    </>
  )
};
