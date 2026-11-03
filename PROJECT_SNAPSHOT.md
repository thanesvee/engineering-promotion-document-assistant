# Project Snapshot — ผู้ช่วยเตรียมเอกสารเลื่อนขั้นวิศวกร

วันที่จัดทำ: 3 พฤศจิกายน 2569 (2026-11-03), Asia/Bangkok

เอกสารนี้บันทึกสถานะเพื่อทำงานต่อ ตรวจ source และรัน Build ซ้ำในวันที่จัดทำแล้ว ส่วนผล Browser QA เป็นผลจากรอบแก้ Workflow ก่อนหน้า ไม่ได้อ้างว่าได้ทดสอบ Browser ซ้ำในวันที่จัดทำ Snapshot

## 1. โปรเจกต์และเป้าหมาย

- Workspace: `D:\แอป 41_ทำ PWA เตรียมเอกสารเลื่อนขั้นวิศวกร_ แยกการ์ด 6 ใบ`
- ชื่อแอป: **ผู้ช่วยเตรียมเอกสารเลื่อนขั้นวิศวกร**
- Short name: **เลื่อนขั้นวิศวกร**
- เป็น PWA ภาษาไทยสำหรับแจกฟรีเพื่อสาธารณประโยชน์
- ทำหน้าที่ Dashboard และตัวจำ URL ของ Plugin ที่ผู้ใช้ติดตั้งในบัญชี ChatGPT ของตนเอง
- ไม่มีการสร้างเอกสารวิศวกรรมภายใน PWA โดยตรง เครื่องมือจริงทำงานใน Plugin ปลายทาง
- เครดิต: **พัฒนาเพื่อสาธารณประโยชน์ โดย ผศ.ดร.ธเนศ วีระศิริ**

## วัตถุประสงค์ของโครงการ

1. **สนับสนุนการเตรียมเอกสารเพื่อขอเลื่อนระดับวิศวกร** โดยรวบรวมช่องทางเข้าสู่เครื่องมือช่วยจัดทำประวัติการประกอบวิชาชีพ บัญชีปริมาณงาน ผลงานเด่น และคำแถลงความรู้ความสามารถไว้ในหน้าเดียว
2. **ลดความซับซ้อนในการเข้าถึงเครื่องมือทั้ง 6 ประเภท** ให้ผู้ใช้เลือกเครื่องมือที่ตรงกับงานได้สะดวก ผ่านการ์ดที่มีชื่อ คำอธิบาย สถานะ และปุ่มใช้งานชัดเจน
3. **สนับสนุนการใช้ Plugin ในบัญชีของผู้ใช้แต่ละคน** ด้วยคำแนะนำการ Upload ZIP ด้วยตนเอง และการบันทึก URL ของ Plugin แยกตามเครื่องมือ เพื่อกลับมาเปิดใช้งานได้โดยไม่ต้องค้นหาลิงก์ใหม่ทุกครั้ง
4. **ช่วยเตรียมข้อมูลสำหรับกรอกระบบออนไลน์** โดยรวมทางเข้าสู่เครื่องมือแปลงตารางประวัติการประกอบวิชาชีพและตารางบัญชีปริมาณงานเป็น Web Format
5. **เพิ่มความสะดวกในการใช้งานหลายอุปกรณ์** ด้วยหน้าจอภาษาไทยที่รองรับ Desktop, Tablet และ Mobile พร้อมโครงสร้าง PWA สำหรับติดตั้งเป็นแอปในเบราว์เซอร์และอุปกรณ์ที่รองรับ
6. **รักษาการควบคุมข้อมูลไว้กับผู้ใช้** โดยเก็บลิงก์ใน localStorage ของเบราว์เซอร์ ไม่มีระบบสมาชิก Backend หรือฐานข้อมูลส่วนกลาง และให้ผู้ใช้แก้ไขหรือล้างลิงก์ได้เอง
7. **เผยแพร่เครื่องมือเพื่อสาธารณประโยชน์โดยไม่คิดค่าใช้จ่ายสำหรับ PWA นี้** เพื่ออำนวยความสะดวกแก่ผู้ประกอบวิชาชีพวิศวกรรม ทั้งนี้ การเข้าถึง Plugin ปลายทางขึ้นอยู่กับบัญชีและเงื่อนไขของบริการที่ผู้ใช้ใช้งาน
8. **ส่งเสริมการเตรียมเอกสารอย่างเป็นระบบและตรวจสอบได้** โดยเป็นเครื่องมือสนับสนุนการทำงาน ผู้ใช้ยังต้องตรวจทานความถูกต้องของข้อมูล เอกสาร และข้อกำหนดที่เกี่ยวข้องก่อนยื่น ไม่ใช่ระบบรับรองผลการพิจารณาเลื่อนระดับ

วัตถุประสงค์เหล่านี้อธิบายเป้าหมายของโครงการ ไม่ได้หมายความว่า PWA สร้างเอกสาร ติดตั้ง Plugin หรือตรวจสอบบัญชีให้ผู้ใช้โดยอัตโนมัติ รายละเอียดสิ่งที่ทำเสร็จและสิ่งที่ยังต้องทดสอบระบุไว้ในส่วนถัดไป

## 2. ขอบเขตและข้อกำหนดที่ต้องรักษา

1. คง UI หลัก การ์ด 6 ใบ สี Icon และ Responsive layout ที่ปรับแล้ว
2. ห้ามลบหรือเขียนทับภาพต้นฉบับ
3. คง localStorage และ key เดิม เพื่อรักษาลิงก์ของผู้ใช้
4. ผู้ใช้ Upload ZIP และ Copy URL ด้วยตนเอง PWA แสดงคำแนะนำเท่านั้น
5. ห้าม Upload ZIP อัตโนมัติ ตรวจสอบบัญชี ChatGPT หรือตรวจสถานะติดตั้ง Plugin
6. ห้ามเพิ่มสมาชิก Backend ฐานข้อมูล หรือ Cloud API
7. ห้ามเพิ่มปุ่ม Download ZIP ZIP แจกแยกกับ Folder คู่มือและลิงก์ PWA
8. ยังไม่อนุญาตให้เชื่อม GitHub หรือ Deploy Netlify ไม่มีการดำเนินการดังกล่าวในงานที่ผ่านมา
9. การแก้ต่อควรจำกัดตามคำขอใหม่ ไม่ขยายงานไปเปลี่ยน UI/ระบบข้อมูลเอง

## 3. สิ่งที่ทำเสร็จแล้ว

### โครงสร้างเว็บและ UI

- เริ่มจากโฟลเดอร์ที่มีภาพ 4 ไฟล์ ไม่มีเว็บเดิม แล้วสร้าง React + Vite
- Header โทนฟ้า/น้ำเงิน มี Icon แอป หัวเรื่อง คำอธิบาย ภาพหมวกนิรภัยและอาคารจาก Reference และเส้นคาดน้ำเงิน/เหลือง
- การ์ดไล่สี 6 แบบ: ฟ้า เขียว ส้ม ม่วง ฟ้าอมเขียว และชมพู
- ขยาย Icon การ์ด จัดความสูงการ์ดให้เท่ากัน และจัดปุ่มให้สัมพันธ์กับสีของการ์ด
- Desktop ตั้งแต่ 1024px: 3 คอลัมน์ × 2 แถว
- Tablet 768–1023px: 2 คอลัมน์
- Mobile ต่ำกว่า 768px: 1 คอลัมน์
- ส่วนล่างมี เริ่มใช้งานครั้งแรก, คู่มือการติดตั้งและใช้งาน, วิดีโอสาธิต, ใช้งานฟรีเพื่อสาธารณประโยชน์ และ Footer เครดิต
- วิดีโอสาธิตมี Modal แจ้งว่ายังไม่ได้เพิ่มวิดีโอ ไม่ได้สร้างลิงก์สมมติ

### Workflow ล่าสุดของการ์ด

**ไม่มี URL:**

- สถานะ `○ ยังไม่ได้ติดตั้งหรือตั้งค่าลิงก์`
- ปุ่มหลัก `ติดตั้งครั้งแรก`
- ปุ่มรอง `ตั้งค่า / แก้ไขลิงก์`
- ไม่แสดงปุ่มเปิดใช้งานเป็นปุ่มหลักในสถานะนี้

**เมื่อกดติดตั้งครั้งแรก:**

- เปิด Modal ระบุชื่อเครื่องมือและชื่อ ZIP ของการ์ดนั้น
- แสดงขั้นตอน 10 ข้อตามคำขอผู้ใช้:
  1. เปิด ChatGPT
  2. ไปที่ Plugins
  3. Upload ไฟล์ ZIP ของ Plugin นี้จาก Folder ที่ได้รับ
  4. รอจนติดตั้ง Plugin สำเร็จ
  5. เปิดหน้า Plugin ที่ติดตั้งแล้ว
  6. Copy URL จาก Address Bar
  7. กลับมาที่ PWA
  8. กด “ตั้งค่า / แก้ไขลิงก์”
  9. Paste URL แล้วกดบันทึก
  10. เมื่อบันทึกแล้ว สถานะจะเปลี่ยนเป็น “✓ พร้อมใช้งาน”
- แจ้งว่า ZIP แจกแยกและผู้ใช้ต้องทำเอง ไม่มีการเรียก API หรือ Upload จริง

**มี URL แล้ว:**

- สถานะ `✓ พร้อมใช้งาน`
- ปุ่มหลัก `เปิดใช้งาน` เปิด URL ที่บันทึกในแท็บใหม่
- ปุ่มรองเปิด Modal เดิมสำหรับแก้ไข บันทึก ล้าง URL หรือยกเลิก
- ล้าง URL แล้วกลับเป็นสถานะยังไม่ได้ติดตั้งหรือตั้งค่าลิงก์ทันที
- สถานะพร้อมใช้งานหมายถึงมี URL บันทึกไว้เท่านั้น ไม่ใช่ผลตรวจการติดตั้งหรือสิทธิ์ปลายทาง

### การ์ดและ ZIP ที่แสดง

| ลำดับ | ID | ชื่อเครื่องมือ | ZIP |
| --- | --- | --- | --- |
| 1 | career | ตารางประวัติการประกอบวิชาชีพ | 01_ตารางประวัติการประกอบวิชาชีพ.zip |
| 2 | quantity | ตารางบัญชีปริมาณงาน | 02_ตารางบัญชีปริมาณงาน.zip |
| 3 | outstanding | ผลงานเด่นทางวิศวกรรม | 03_ผลงานเด่นทางวิศวกรรม.zip |
| 4 | statement | คำแถลงความรู้ความสามารถ | 04_คำแถลงความรู้ความสามารถ.zip |
| 5 | career-web | แปลงตารางประวัติการประกอบวิชาชีพ เป็น Web Format | 05_แปลงตารางประวัติเป็น_Web_Format.zip |
| 6 | quantity-web | แปลงตารางบัญชีปริมาณงาน เป็น Web Format | 06_แปลงตารางบัญชีปริมาณงานเป็น_Web_Format.zip |

ชื่อ ZIP เป็นข้อความใน UI ยังไม่มีไฟล์ ZIP ทั้ง 6 ใน Project และไม่ได้สร้างหรือบรรจุ Plugin จริง

### เริ่มใช้งานครั้งแรก

Modal ภาพรวมแจ้งให้ Upload ZIP ใน ChatGPT ก่อน จากนั้น Copy URL ของ Plugin ที่ติดตั้งแล้วกลับมาตั้งค่าในการ์ด และระบุชัดว่า **ไม่จำเป็นต้อง Upload ทั้ง 6 Plugin** หากต้องการใช้เพียงบางเครื่องมือ

## 4. ระบบข้อมูลและ Modal

- ฟังก์ชัน key: `engineer-plugin-url:${id}`
- Key ทั้ง 6: `engineer-plugin-url:career`, `engineer-plugin-url:quantity`, `engineer-plugin-url:outstanding`, `engineer-plugin-url:statement`, `engineer-plugin-url:career-web`, `engineer-plugin-url:quantity-web`
- โหลด URL จาก localStorage เมื่อเริ่ม App และเก็บใน React state `urls`
- บันทึกแยกแต่ละ key ด้วย setItem; ล้างด้วย removeItem ไม่ล้างข้อมูลการ์ดอื่น
- ตรวจ URL ด้วย `new URL()` รับ http/https และไม่รับ URL ที่มี username/password
- เปิดลิงก์ด้วย `window.open(url, '_blank', 'noopener,noreferrer')`
- จัดการข้อผิดพลาดเมื่อบันทึก storage ไม่ได้ พร้อม Toast หลังบันทึก/ล้าง
- ใช้ native `<dialog>` ปิดด้วยกากบาท, Escape หรือคลิก backdrop และคืน focus ไปปุ่มต้นทาง
- Modal ตั้งค่าใช้ ID ของการ์ด; Modal คู่มือติดตั้งใช้ `setup:<id>`; ภาพรวมใช้ `start`; คู่มือ PWA ใช้ `guide`; วิดีโอใช้ `video`
- `cards` และ `zipFiles` เป็น array จับคู่ตาม index หากเปลี่ยนลำดับต้องเปลี่ยนทั้งสองให้ตรงกัน
- ไม่ซิงก์ข้ามเครื่องหรือเบราว์เซอร์ และยังไม่มี storage event listener สำหรับอัปเดตแท็บอื่นทันที
- localStorage แยกตาม origin: localhost กับ 127.0.0.1 หรือพอร์ตต่างกันจะเห็นข้อมูลคนละชุด ไม่ใช่ข้อมูลหาย
- อย่าล้าง storage ของผู้ใช้เพื่อทดสอบโดยไม่เก็บค่าเดิม รอบทดสอบที่ผ่านมาคืนลิงก์เดิมครบแล้ว

## 5. PWA

- Manifest ภาษาไทย: display standalone, start_url/scope/id เป็น `./`
- Icon PNG 192×192 และ 512×512 ใช้ของที่ผู้ใช้ให้ มี apple-touch-icon และ meta สำหรับ iOS
- มีปุ่มติดตั้งเมื่อเบราว์เซอร์ส่ง beforeinstallprompt และคู่มือ Safari → แชร์ → เพิ่มไปยังหน้าจอโฮม
- Vite base เป็น `./` เพื่อรองรับ relative asset paths
- Service worker ลงทะเบียนเฉพาะ Production; `npm run dev` ไม่ใช้สำหรับทดสอบ Offline/PWA installation ให้ครบ
- `scripts/build-sw.mjs` สร้าง `dist/sw.js` หลัง vite build จากรายการไฟล์จริง พร้อม hash เวอร์ชัน cache
- แคช App shell, JS/CSS และภาพ; navigation ใช้ network ก่อนและ fallback ไปหน้าแอปใน cache เมื่อ offline
- ลบ cache เก่าเฉพาะ prefix `engineer-pwa-`; ไม่แคชบริการ Plugin ภายนอก
- ยังไม่มี UI แจ้งอัปเดต service worker หรือคำสั่ง skipWaiting อัตโนมัติ
- ต้องเปิดออนไลน์ครั้งแรกและแคชสำเร็จก่อนใช้ออฟไลน์ การเปิด Plugin ต้องใช้เน็ต
- การติดตั้งต้องใช้ HTTPS หรือ localhost และขึ้นกับเบราว์เซอร์/อุปกรณ์

## 6. ไฟล์ต้นฉบับที่เก็บไว้

| ไฟล์ | หน้าที่ | ขนาดภาพ |
| --- | --- | --- |
| Thai Engineering Document Assistant Dashboard.png | UI Reference | 1536×1024 |
| ChatGPT Image Nov 2, 2026, 01_56_21 PM.png | ภาพ Icon ต้นฉบับ | 1254×1254 |
| icon-192.png | PWA Icon | 192×192 |
| icon-512.png | PWA Icon | 512×512 |

ไม่ได้แก้ภาพต้นฉบับ ใช้สำเนา Icon และตัดองค์ประกอบ UI ออกมาเป็นไฟล์ใหม่ใน public/assets ไม่สร้างภาพใหม่แทนต้นแบบ

## 7. ไฟล์ที่สร้าง/แก้สะสม

| ไฟล์/โฟลเดอร์ | เนื้อหา |
| --- | --- |
| package.json | Scripts dev/build/preview และ dependencies |
| package-lock.json | เวอร์ชัน dependency ที่ติดตั้ง |
| vite.config.js | base `./` |
| index.html | ภาษาไทย title metadata manifest favicon และ iOS metadata |
| src/main.jsx | React UI, การ์ด, localStorage, Modal, Workflow ZIP, เปิด Plugin และ install prompt |
| src/style.css | UI responsive สีการ์ด Header Footer Modal และรูปแบบชื่อ ZIP |
| public/manifest.webmanifest | PWA manifest |
| public/icon-192.png, public/icon-512.png | สำเนา Icon |
| public/assets/banner.png | ภาพ Header ตัดจาก UI Reference |
| public/assets/career.png, quantity.png, outstanding.png, statement.png, career-web.png, quantity-web.png | Icon การ์ด ตัดจาก UI Reference |
| scripts/build-sw.mjs | สร้าง service worker ใน Build |
| .gitignore | ไม่รวม node_modules, dist, *.local |
| README.md | วิธีรัน Build/Preview PWA ข้อมูลและภาพต้นแบบ; ยังไม่ได้เพิ่มรายละเอียด Workflow ZIP ล่าสุด |
| dist/ | ผล Build ที่สร้างใหม่ได้ ไม่แก้ไฟล์นี้แทน source |
| node_modules/ | dependencies ที่ติดตั้งแล้ว |
| PROJECT_SNAPSHOT.md | เอกสารส่งต่องานฉบับนี้ |

การแก้ Workflow รอบล่าสุดเปลี่ยนเฉพาะ `src/main.jsx` และเพิ่ม CSS สำหรับชื่อ ZIP/สถานะใน `src/style.css` จากนั้นสร้าง dist ใหม่

## 8. เทคโนโลยีและคำสั่ง

ตรวจจาก npm ls วันที่จัดทำ:

- React 19.3.1
- React DOM 19.3.1
- Vite 6.4.5
- package version 1.0.0; ใช้ JavaScript/JSX ไม่มี TypeScript
- ไม่มี test script หรือชุด E2E ถาวร การทดสอบก่อนหน้าใช้เครื่องมือแบบเฉพาะกิจ

```powershell
npm install
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
npm run build
npm run preview -- --host 0.0.0.0 --port 4173 --strictPort
```

- Dev URL: `http://localhost:5173/`
- Alternative: `http://127.0.0.1:5173/` (storage คนละ origin)
- Production preview ตามคำสั่งข้างต้น: `http://localhost:4173/`
- อย่าใช้ `0.0.0.0` เป็น URL ที่ส่งผู้ใช้ เป็น address สำหรับ bind server
- เคยพบ server ใน sandbox ยังมี session แต่ Chrome เข้าไม่ได้ แก้ด้วยหยุด process ที่เป็นของงานนี้แล้วรันนอก sandbox ผ่าน permission ของเครื่องมือ
- เคยพบ server หยุดข้ามรอบงาน จึงต้องตรวจ listener และ HTTP จริงก่อนแจ้งว่าเว็บเปิดได้
- สถานะ server ปัจจุบันยังไม่ได้ตรวจสดในรอบ Snapshot นี้ การมีแท็บ localhost เปิดอยู่ไม่ยืนยันว่า server ยังทำงาน
- ครั้งก่อน npm install สำเร็จหลังรันนอก sandbox; audit ตอนนั้นรายงาน 0 vulnerabilities ไม่ใช่ผล audit ใหม่วันนี้

## 9. ผลการทดสอบที่ผ่าน

### ยืนยันซ้ำในรอบ Snapshot วันที่ 2026-11-03

- `npm run build`: **ผ่าน**, Vite แปลง 23 modules
- สร้าง service worker พร้อมรายการ offline assets 15 รายการ
- Cache version: `cc29b3d3c7ddb364`
- `node --check dist/sw.js`: **ผ่าน**
- `npm ls --depth=0`: dependencies ติดตั้งครบตามรายการด้านบน
- Build outputs: index.html 1.13 kB, CSS 13.57 kB, JS 238.43 kB (gzip 73.59 kB)
- อ่าน source ยืนยัน mapping ของทั้ง 6 ZIP, state สองแบบ และข้อความภาพรวมล่าสุด

### ผ่านในรอบ Workflow ก่อนหน้า (2026-11-02)

- Browser QA ครบ 6 การ์ด: เปิด Modal ตั้งค่า, ล้างเพื่อดูสถานะเริ่มต้น, เปิดคู่มือติดตั้ง, ตรวจชื่อ ZIP ของการ์ดและข้อความ Copy URL
- บันทึก URL ทดสอบแล้วแต่ละการ์ดแสดงพร้อมใช้งาน อ่านกลับจาก Modal ได้ตรง
- คืนค่า URL เดิมของผู้ใช้ หรือเอาเฉพาะ URL ทดสอบออกสำหรับการ์ดที่เดิมว่าง
- รีโหลดแล้วการ์ดที่มี URL เดิมยังพร้อมใช้งาน ยืนยัน persistence และไม่มีข้อมูลทดสอบค้างจากรอบนั้น
- ทดสอบฟังก์ชันจริงที่สกัดจาก source ด้วย Node VM/mock storage: save/edit/clear แยก key ครบทั้ง 6 และ open เรียก `_blank` พร้อม noopener,noreferrer ถูกต้อง
- ตรวจ installationSteps ครบ 10 และ ZIP ครบ 6
- Modal เริ่มใช้งานครั้งแรกแสดงคำแนะนำ Upload ZIP และไม่ต้องติดตั้งครบ 6
- Responsive 320, 390, 768, 820, 1024, 1536px: ไม่มี horizontal overflow และจำนวนคอลัมน์ตรงตาม breakpoint
- Modal ติดตั้งที่ 320px: ไม่ล้นแนวนอน ชื่อ ZIP ยาวตัดบรรทัดได้ และเลื่อนอ่านครบ 10 ข้อได้
- Browser Console หลังทดสอบไม่พบ error/warning

### ผ่านในรอบก่อนหน้านั้น

- เคยยืนยัน dev listener `0.0.0.0:5173` และ HTTP 200 สำหรับหน้าแรก, main.jsx, style.css และ Vite client
- เคยเปิด Browser Preview แสดงการ์ดครบ 6
- ตรวจขนาด Icon และ hash สำเนาตรงต้นฉบับ รวมทั้งไฟล์ Icon ตาม Manifest มีจริง

## 10. งานค้างและข้อจำกัด

1. **วิดีโอสาธิต:** ยังไม่มีไฟล์/URL จากผู้ใช้ ปัจจุบันแสดงข้อความแจ้งใน Modal ต้องรอเนื้อหาจริงก่อนเปลี่ยน
2. **ZIP จริง:** ยังไม่ได้รับ/สร้างไฟล์ Plugin ทั้ง 6 ชื่อใน UI เป็นชื่อสำหรับแจกตามคำขอ ต้องนำไฟล์จริงมาแจกแยกและให้ชื่อตรงกัน
3. **PWA บนอุปกรณ์จริง:** ยังไม่ได้ทดสอบ Install/เปิดแบบ standalone บน Desktop, Android, iPhone/iPad จริงครบทุกระบบ
4. **Offline จริง:** โค้ด service worker และ Build ผ่าน แต่ยังไม่ยืนยันรอบ Production Browser ว่าแคชครบ ตัดเน็ตแล้วเปิดซ้ำ และอัปเดตเวอร์ชันได้ครบวงจร
5. **คู่มือ README:** ยังไม่ได้เพิ่ม Flow Upload ZIP ล่าสุด รายละเอียดฉบับปัจจุบันอยู่ใน source และ Snapshot นี้
6. **Browser tab synchronization:** URL เปลี่ยนในแท็บหนึ่ง อีกแท็บต้องรีโหลดจึงโหลด localStorage ใหม่ ยังไม่มี real-time sync ซึ่งไม่ใช่ข้อกำหนดเดิม
7. **การตรวจปลายทาง:** ไม่มีการยืนยันว่า URL ใช้งานจริงหรือ Plugin ติดตั้งแล้ว เป็นข้อจำกัดโดยเจตนาตามคำขอ
8. **CSS/source maintainability:** CSS ชุดปรับ UI เป็น override ต่อท้ายของเดิม และ JSX มีบรรทัดยาว ยังไม่ได้ refactor เพื่อลดความเสี่ยงต่อ UI/logic ที่ผู้ใช้ขอคงไว้
9. **ข้อความ badge:** ยังเป็น “6 เครื่องมือพร้อมใช้งาน” แบบคงที่ ไม่ใช่จำนวน URL ที่ตั้งค่าแล้ว ควรพิจารณาเฉพาะเมื่อมีคำขอแก้ copy เพิ่ม
10. ไม่มี deployment, URL สาธารณะ หรือ GitHub connection ที่ทำในงานนี้ localhost ใช้สำหรับทดลองในเครื่อง

รายการนี้แยกงานที่ยังไม่ทดสอบ/ยังไม่มีเนื้อหา ออกจากข้อจำกัดที่ตั้งใจไว้ ไม่ได้หมายความว่าให้เพิ่ม backend หรือการตรวจบัญชีเพื่อแก้ข้อจำกัด

## 11. ขั้นตอนแรกในการทำงานต่อ

**เริ่มจากตรวจ dev server และเปิด source ปัจจุบัน ไม่ต้องสร้าง Project ใหม่**

1. อ่าน Snapshot นี้ และตรวจ `src/main.jsx`, `src/style.css`, `package.json` ว่ามีการเปลี่ยนหลัง Snapshot หรือไม่
2. ตรวจพอร์ต 5173 และ HTTP response หากไม่ทำงานให้รันคำสั่ง dev ด้านบนใน environment ที่ Chrome เข้าถึงได้ ใช้ escalation ของเครื่องมือเมื่อ sandbox บล็อก
3. เปิด Preview `http://localhost:5173/` และตรวจว่าค่าลิงก์ของผู้ใช้ยังอยู่ ห้ามล้างโดยไม่เก็บค่าก่อน
4. หากจะทำ QA PWA ต่อ ให้ Build และใช้ Production preview พอร์ต 4173 ทดสอบออนไลน์ครั้งแรก → แคช → offline → reload ก่อนตรวจการ Install บนอุปกรณ์จริง
5. หากจะเตรียมชุดแจกต่อ ต้องรับ ZIP ทั้ง 6/เฉพาะตัวที่มี และวิดีโอหรือคู่มือจริงจากผู้ใช้ก่อน ไม่สร้างลิงก์สมมติ ไม่เพิ่มปุ่มดาวน์โหลดเอง
6. หลังแก้ตามคำขอใหม่ ให้ทดสอบเฉพาะ Flow ที่กระทบ พร้อม Build และเปิด Preview โดยรักษา UI/key/localStorage เดิม

### ข้อความส่งต่อแบบพร้อมใช้

> ทำงานต่อใน Project เดิมตาม PROJECT_SNAPSHOT.md แอปเป็น React + Vite PWA ภาษาไทย มี 6 การ์ด คง UI สี Icon Responsive และ localStorage key engineer-plugin-url:<id> ล่าสุดทำ Workflow: ไม่มี URL → ติดตั้งครั้งแรกพร้อม Modal 10 ขั้นและชื่อ ZIP เฉพาะการ์ด; มี URL → พร้อมใช้งานและเปิดแท็บใหม่ ผู้ใช้ Upload ZIP/Copy URL เอง ห้าม backend ตรวจบัญชี Upload อัตโนมัติ Download ZIP GitHub หรือ Deploy Netlify งานค้างคือวิดีโอ/ZIP จริงและ QA Production Offline/Install บนอุปกรณ์จริง เริ่มด้วยตรวจ dev server 5173 และข้อมูลเดิมก่อนแก้ source ล่าสุด Build ผ่านวันที่ 2026-11-03 และอย่าอ้างผล Browser QA เก่าว่าเป็นการทดสอบใหม่

## 12. ผล Production PWA / Offline test — 2026-11-03

- npm run build ผ่าน; node --check dist/sw.js ผ่าน
- Service worker cache version engineer-pwa-cc29b3d3c7ddb364 มี precache URL 15 รายการ ตรวจแล้วทุกเส้นทางมีไฟล์จริง มี install/activate/fetch handlers
- เปิด Production Preview http://localhost:4173/ สำเร็จ Online แสดงการ์ดครบ 6 ภาพครบ 8 และไม่มี Console error/warning ที่เครื่องมือจับได้
- พอร์ต 4173 เป็นคนละ origin กับ 5173 จึงไม่มี URL จาก Dev โดยอัตโนมัติ ไม่ได้ย้ายหรือเขียนทับข้อมูล
- เครื่องมือ In-app Browser ไม่มี Offline toggle ที่เปิดใช้ได้ใน capabilities จึงทดสอบโดยหยุดเฉพาะ Production server แล้วตรวจ HTTP ยืนยัน connection refused จากนั้น reload หน้า
- ผลเมื่อ server หยุด: หน้าว่าง การ์ด 0 ภาพ 0 ไม่ผ่านกรณี origin unavailable จึงยังยืนยัน runtime Service Worker activation/control และ Cache Storage ไม่ได้ ไม่ควรถือว่าผ่าน Online → Cache → Offline → Reload ครบวงจร
- Console ที่เครื่องมือจับได้ไม่แสดง error แม้ Offline ล้มเหลว; main.jsx มี catch ว่างเมื่อ register service worker ล้มเหลว จึงไม่มี error ไม่ใช่หลักฐานว่าลงทะเบียนสำเร็จ
- ยังไม่สรุปว่าเป็นปัญหาโค้ดหรือข้อจำกัดของ In-app Browser ต้องตรวจต่อด้วย Chrome DevTools Application: Service Workers / Cache Storage และ Network Offline โดยยืนยัน activated/controller/cache ก่อนตัดเครือข่าย
- เปิด Production server กลับแล้ว หน้า Online กลับมาแสดงการ์ด 6 ใบ
- รีโหลด Dev 5173 และอ่าน URL ผ่าน Modal ทั้ง 6 โดยกดเฉพาะยกเลิก ยืนยันการ์ดแรกยังเป็น Plugin เดิม อีก 5 ว่างตรงสถานะก่อนทดสอบ ไม่มีการบันทึก ล้าง หรือเขียนทับ localStorage
- ไม่แก้ UI/Source ไม่เพิ่ม feature และไม่ Deploy; เปลี่ยนเฉพาะผล Build ใน dist และบันทึกผลใน Snapshot
- สถานะสุดท้าย: Build/Online ผ่าน, Offline ยังไม่ผ่านในสภาพทดสอบนี้, runtime cache/activation ยังไม่ยืนยัน, การติดตั้งอุปกรณ์จริงยังไม่ได้ทดสอบ
