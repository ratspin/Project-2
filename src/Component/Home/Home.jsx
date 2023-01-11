import React from 'react'
import './Home.css';

import { HeaderCon,Logo} from './Styled'

export default function Home() {
  return (
    <HeaderCon>
        <Logo src="/food4U.png" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div><br/>
                <h1>&nbsp;</h1>
                <h1 style={{ fontSize: '4rem', color: '#fff' }}>แนะนำอาหารสำหรับผู้ป่วยสูงอายุ<br />ที่เป็นโรคไม่ติดต่อเรื้อรัง</h1>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'normal', marginTop: '1rem' }}>เมนูอาหารทางเลือกเพื่อสุขภาพ</h3>
                <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'normal', marginTop: '1.5rem' }}>วางแผนการรับประทานอาหารสำหรับคุณ</p>
                <button style={{ marginTop: '1rem', backgroundColor: '#f8ae1a', color: '#fff', padding: '20px 1rem', width: '200px', border: 'none', fontSize: '1.5rem', position: 'relative', top: '5px' ,cursor: 'pointer', }} type='submit'>
                  <a href="/info"  >เริ่มต้นใช้งาน</a>
                </button>
            </div>
        </div>
    </HeaderCon>
  )
}

