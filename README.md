# ผู้ช่วยเตรียมเอกสารเลื่อนขั้นวิศวกร

React + Vite PWA ภาษาไทย ไม่มี Backend, ฐานข้อมูล หรือ Cloud API

## เริ่มต้น

```sh
npm install
npm run dev
```

## ตรวจสอบรุ่น Production

```sh
npm run build
npm run preview
```

ไฟล์พร้อมใช้อยู่ใน `dist/` การติดตั้ง PWA ต้องเปิดผ่าน HTTPS หรือ localhost โดย service worker ทำงานเฉพาะ Production เท่านั้น Build จะสร้างรายการแคชจากไฟล์จริง รวม JavaScript/CSS ที่มีชื่อ hash รองรับการติดตั้งใน subdirectory ด้วย

Desktop/Android: ใช้ Chrome หรือ Edge แล้วเลือกติดตั้งแอปจากเมนูหรือแถบที่อยู่ หากเบราว์เซอร์ส่ง install prompt แอปจะแสดงปุ่มติดตั้งด้วย

iPhone/iPad: Safari → แชร์ → เพิ่มไปยังหน้าจอโฮม

เปิดแอปออนไลน์ครั้งแรกเพื่อให้แคชเสร็จ จากนั้นหน้าแอปใช้แบบออฟไลน์ได้ การเปิด Plugin ยังต้องใช้อินเทอร์เน็ต ไม่ตรวจสอบบัญชีหรือการติดตั้ง Plugin อัตโนมัติ

## ลิงก์และข้อมูล

แต่ละการ์ดบันทึก URL ใน localStorage แยก key `engineer-plugin-url:<id>` แก้ไขหรือล้างได้จาก Modal รับเฉพาะ URL http/https ไม่ส่งข้อมูลออกจากแอป และเปิดแท็บใหม่ด้วย noopener,noreferrer การล้างข้อมูลเว็บไซต์จะลบ URL ที่บันทึกไว้

## ภาพต้นฉบับ

- `Thai Engineering Document Assistant Dashboard.png`: UI Reference
- `ChatGPT Image Nov 2, 2026, 01_56_21 PM.png`: ภาพ Icon ต้นฉบับ
- `icon-192.png` และ `icon-512.png`: Icon PWA ที่มีอยู่แล้ว

เก็บภาพต้นฉบับทั้งหมดไว้ ไม่เขียนทับ ใช้สำเนา Icon ใน public และภาพที่ตัดจาก UI ใน public/assets ไม่มีการสร้างภาพใหม่

ส่วนวิดีโอสาธิตแสดงข้อความว่ายังไม่ได้เพิ่มวิดีโอ เนื่องจากไม่มีไฟล์หรือลิงก์วิดีโอในข้อมูลต้นทาง

พัฒนาเพื่อสาธารณประโยชน์ โดย ผศ.ดร.ธเนศ วีระศิริ
