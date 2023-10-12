import './style.scss'
import Image from 'next/image'

export default function Footer () {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="footerWrapper">
          <div className="footerWrapper__left">
            <div className="companyinfo">© 2023. 차트를이힛. ALL RIGHTS RESERVED.</div>
          </div>
          <div className="footerWrapper__right">
            <div>
              <a href="https://youtube.com/@iihitChart" target="_blank"></a>
            </div>
            <div>
              <a href="https://discord.gg/kNzjb69yZk" target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}