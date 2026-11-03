import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const base = import.meta.env.BASE_URL;
const cards = [
 ['career','ตารางประวัติการประกอบวิชาชีพ','จัดทำตารางประวัติการทำงาน 4 คอลัมน์อย่างเป็นระบบ'],
 ['quantity','ตารางบัญชีปริมาณงาน','จัดทำบัญชีแสดงผลงานและปริมาณงาน 6 คอลัมน์'],
 ['outstanding','ผลงานเด่นทางวิศวกรรม','เรียบเรียงรายงานผลงานเด่น อธิบายบทบาทและความเชี่ยวชาญ'],
 ['statement','คำแถลงความรู้ความสามารถ','เตรียมคำแถลงความรู้ความสามารถตามหัวข้อที่กำหนด'],
 ['career-web','แปลงตารางประวัติการประกอบวิชาชีพ เป็น Web Format','แปลงตารางประวัติการประกอบวิชาชีพเป็นรูปแบบสำหรับกรอกบนเว็บ'],
 ['quantity-web','แปลงตารางบัญชีปริมาณงาน เป็น Web Format','แปลงตารางบัญชีปริมาณงานเป็นรูปแบบสำหรับกรอกบนเว็บ'],
];
const zipFiles = [
 '01_ตารางประวัติการประกอบวิชาชีพ.zip',
 '02_ตารางบัญชีปริมาณงาน.zip',
 '03_ผลงานเด่นทางวิศวกรรม.zip',
 '04_คำแถลงความรู้ความสามารถ.zip',
 '05_แปลงตารางประวัติเป็น_Web_Format.zip',
 '06_แปลงตารางบัญชีปริมาณงานเป็น_Web_Format.zip',
];
const installationSteps = ['เปิด ChatGPT','ไปที่ Plugins','Upload ไฟล์ ZIP ของ Plugin นี้จาก Folder ที่ได้รับ','รอจนติดตั้ง Plugin สำเร็จ','เปิดหน้า Plugin ที่ติดตั้งแล้ว','Copy URL จาก Address Bar','กลับมาที่ PWA','กด “ตั้งค่า / แก้ไขลิงก์”','Paste URL แล้วกดบันทึก','เมื่อบันทึกแล้ว สถานะจะเปลี่ยนเป็น “✓ พร้อมใช้งาน”'];
const key = id => `engineer-plugin-url:${id}`;
function App(){
 const [urls,setUrls]=useState(()=>Object.fromEntries(cards.map(([id])=>{try{return [id,localStorage.getItem(key(id))||'']}catch{return [id,'']}})));
 const [modal,setModal]=useState(null),[value,setValue]=useState(''),[error,setError]=useState(''),[notice,setNotice]=useState(''),[install,setInstall]=useState(null);
 const dialog=useRef(null), opener=useRef(null);
 useEffect(()=>{const handler=e=>{e.preventDefault();setInstall(e)};const done=()=>setInstall(null);window.addEventListener('beforeinstallprompt',handler);window.addEventListener('appinstalled',done);return()=>{window.removeEventListener('beforeinstallprompt',handler);window.removeEventListener('appinstalled',done)}},[]);
 useEffect(()=>{if(modal)dialog.current.showModal();else if(dialog.current?.open)dialog.current.close()},[modal]);
 function show(type,event){opener.current=event.currentTarget;setError('');setModal(type)}
 function close(){setModal(null);opener.current?.focus()}
 function save(clear=false){let url='';if(!clear){try{const parsed=new URL(value.trim());if(!['https:','http:'].includes(parsed.protocol)||parsed.username||parsed.password)throw Error();url=parsed.href}catch{setError('กรุณากรอก URL แบบเต็มที่ขึ้นต้นด้วย https:// หรือ http://');return}}
 try{if(url)localStorage.setItem(key(modal),url);else localStorage.removeItem(key(modal));setUrls(old=>({...old,[modal]:url}));setNotice(url?'บันทึกลิงก์ Plugin แล้ว':'ล้างลิงก์ Plugin แล้ว');close()}catch{setError('ไม่สามารถบันทึกได้ โปรดอนุญาตพื้นที่จัดเก็บของเบราว์เซอร์แล้วลองอีกครั้ง')}
 }
 function open(id){if(!urls[id]){setNotice('กรุณาตั้งค่าลิงก์ Plugin ก่อนใช้งาน');return}window.open(urls[id],'_blank','noopener,noreferrer')}
 const selected=cards.find(([id])=>id===modal);
 const installIndex=cards.findIndex(([id])=>modal===`setup:${id}`);
 return <><header><div className="hero"><img className="app-icon" src={base+'icon-192.png'} alt="ไอคอนผู้ช่วยเลื่อนขั้นวิศวกร"/><div className="hero-copy"><span className="eyebrow">เครื่องมือสำหรับวิศวกร • ใช้งานฟรี</span><h1>ผู้ช่วยเตรียมเอกสาร<br className="desktop-break"/>เลื่อนขั้นวิศวกร</h1><p>ชุดเครื่องมือสนับสนุนการจัดทำเอกสารสำหรับการขอเลื่อนระดับ</p><span className="sub">เตรียมเอกสารอย่างเป็นระบบ พร้อมก้าวสู่ความสำเร็จในวิชาชีพ</span></div><img className="construction" src={base+'assets/banner.png'} alt="หมวกนิรภัย แบบก่อสร้าง และอาคาร"/></div><div className="stripe"/></header>
 <main><div className="section-head"><div><h2>เครื่องมือเตรียมเอกสาร</h2><p>เลือกเครื่องมือที่ต้องการ แล้วตั้งค่าลิงก์ Plugin ของคุณ</p></div><span className="badge">6 เครื่องมือพร้อมใช้งาน</span></div>
 <div className="cards">{cards.map(([id,title,description],i)=><article className={'card card-'+i} key={id}><div className="card-top"><img src={base+`assets/${id}.png`} alt=""/><h3><span>{i+1}.</span> {title}</h3></div><p className="description">{description}</p><span className={'status '+(urls[id]?'ready':'')}>{urls[id]?'✓ พร้อมใช้งาน':'○ ยังไม่ได้ติดตั้งหรือตั้งค่าลิงก์'}</span><div className="actions">{urls[id]?<button className="primary" onClick={()=>open(id)}>↗ เปิดใช้งาน</button>:<button className="primary" onClick={e=>show(`setup:${id}`,e)}>ติดตั้งครั้งแรก</button>}<button className="secondary" onClick={e=>{setValue(urls[id]);show(id,e)}}>⚙ ตั้งค่า / แก้ไขลิงก์</button></div></article>)}</div>
 <nav className="help" aria-label="คำแนะนำ"><button onClick={e=>show('start',e)}>ⓘ <span>เริ่มใช้งานครั้งแรก</span><b>›</b></button><button onClick={e=>show('guide',e)}>▤ <span>คู่มือการติดตั้งและใช้งาน</span></button><button onClick={e=>show('video',e)}>▷ <span>วิดีโอสาธิต</span></button><div className="free">✓ <span>ใช้งานฟรี<br/>เพื่อสาธารณประโยชน์</span></div></nav>
 {install&&<button className="install" onClick={async()=>{await install.prompt();setInstall(null)}}>＋ ติดตั้งแอปบนอุปกรณ์นี้</button>}
 <p className="privacy">ลิงก์บันทึกเฉพาะเบราว์เซอร์และอุปกรณ์นี้ • เปิด Plugin ในแท็บใหม่เมื่อใช้งาน</p>
 </main><footer><span aria-hidden="true">⚙</span> พัฒนาเพื่อสาธารณประโยชน์ โดย ผศ.ดร.ธเนศ วีระศิริ</footer>
 {notice&&<div className="toast" role="status">{notice}<button aria-label="ปิดข้อความ" onClick={()=>setNotice('')}>×</button></div>}
 <dialog ref={dialog} onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===dialog.current)close()}}><div className="modal-head"><h2>{selected?'ตั้งค่า / แก้ไขลิงก์':installIndex>=0?'ติดตั้งครั้งแรก':modal==='start'?'เริ่มใช้งานครั้งแรก':modal==='guide'?'คู่มือการติดตั้งและใช้งาน':'วิดีโอสาธิต'}</h2><button autoFocus={!selected} aria-label="ปิดหน้าต่าง" onClick={close}>×</button></div>
 {selected?<form onSubmit={e=>{e.preventDefault();save()}}><p>{selected[1]}</p><label htmlFor="plugin-url">URL ของ Plugin</label><input autoFocus id="plugin-url" type="url" required value={value} onChange={e=>{setValue(e.target.value);setError('')}} placeholder="https://…" aria-describedby="url-help url-error"/><p id="url-help" className="hint">คัดลอกลิงก์ Plugin ที่คุณต้องการใช้มาวางที่นี่ แต่ละเครื่องมือกำหนดลิงก์แยกกันได้</p><p id="url-error" className="error" role="alert">{error}</p><div className="modal-actions"><button type="button" className="danger" onClick={()=>save(true)}>ล้าง URL</button><button type="button" className="secondary" onClick={close}>ยกเลิก</button><button className="primary" type="submit">บันทึกลิงก์</button></div></form>:installIndex>=0?<div className="guide"><h3>{cards[installIndex][1]}</h3><p className="zip-name"><strong>ไฟล์ ZIP สำหรับเครื่องมือนี้</strong><br/><span>{zipFiles[installIndex]}</span></p><ol>{installationSteps.map(step=><li key={step}>{step}</li>)}</ol><p>ไฟล์ ZIP แจกแยกอยู่ใน Folder เดียวกับคู่มือและลิงก์ PWA กรุณา Upload และ Copy URL ด้วยตนเอง</p><p className="hint">PWA เป็น Dashboard และตัวจำ URL เท่านั้น ไม่ Upload ZIP หรือตรวจสอบบัญชีและสถานะการติดตั้ง Plugin</p></div>:modal==='start'?<div className="guide"><p>ก่อนใช้งาน กรุณา Upload ไฟล์ ZIP ของ Plugin ที่ต้องการใน ChatGPT ก่อน จากนั้น Copy URL ของ Plugin ที่ติดตั้งแล้ว และนำมาตั้งค่าในการ์ดของ Plugin นั้น</p><p><strong>ไม่จำเป็นต้อง Upload ทั้ง 6 Plugin</strong> หากต้องการใช้เพียงบางเครื่องมือ ให้ติดตั้งเฉพาะ Plugin ที่ต้องการ</p><p>กด “ติดตั้งครั้งแรก” บนการ์ดเพื่อดูชื่อไฟล์ ZIP และขั้นตอนติดตั้ง ไฟล์ ZIP แจกแยกอยู่ใน Folder เดียวกับคู่มือและลิงก์ PWA โดยผู้ใช้ Upload และ Copy URL ด้วยตนเอง</p><p>คุณแก้ไขหรือล้างลิงก์แต่ละการ์ดได้ทุกเมื่อ ข้อมูลจะอยู่เฉพาะเบราว์เซอร์นี้ การล้างข้อมูลเว็บไซต์จะลบลิงก์ที่บันทึกไว้ด้วย</p><p>โปรดตรวจทานเนื้อหาและข้อกำหนดที่เกี่ยวข้องก่อนนำเอกสารไปยื่น</p></div>:modal==='guide'?<div className="guide"><h3>Desktop และ Android</h3><p>เปิดเว็บผ่าน Chrome หรือ Edge แล้วเลือกไอคอนติดตั้งในแถบที่อยู่ หรือเมนู “ติดตั้งแอป / เพิ่มลงในหน้าจอหลัก” หากมีปุ่มติดตั้งด้านล่างหน้า สามารถกดได้โดยตรง</p><h3>iPhone / iPad</h3><p>เปิดด้วย Safari → กดแชร์ → เพิ่มไปยังหน้าจอโฮม → เพิ่ม</p><h3>การใช้งานออฟไลน์</h3><p>หลังเปิดออนไลน์ครั้งแรกและแอปจัดเก็บไฟล์เรียบร้อย หน้าแอปและการตั้งค่าลิงก์ใช้งานออฟไลน์ได้ การเปิด Plugin ต้องใช้อินเทอร์เน็ตและสิทธิ์เข้าถึงของบริการปลายทาง</p><p>การติดตั้งต้องเปิดผ่าน HTTPS หรือ localhost และขึ้นอยู่กับเบราว์เซอร์ของอุปกรณ์</p></div>:<div className="guide"><p>ยังไม่ได้เพิ่มวิดีโอสาธิตในโปรเจกต์นี้</p><p>เริ่มใช้งานได้จาก “เริ่มใช้งานครั้งแรก” และ “คู่มือการติดตั้งและใช้งาน”</p></div>}</dialog></>;
}
createRoot(document.getElementById('root')).render(<App/>);
if(import.meta.env.PROD&&'serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register(base+'sw.js').catch(()=>{}));
