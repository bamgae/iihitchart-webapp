import Link from 'next/link'
import './style.scss'

export default function Header () {
  return (
    <>
      <Link href="/"><div className="brandLogo">이힛<span className="rotateLetter10">차</span><span className="rotateLetter20">트</span></div></Link>
    </>
  )
}