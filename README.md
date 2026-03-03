# เว็บตัวแทนประกัน AIA — พรปวีณ์ ศรีพิมพ์สอ

เว็บไซต์ Lead Generation + Personal Branding สำหรับตัวแทนประกัน AIA รองรับ 3 ภาษา (ไทย / ລາວ / English) และ Mobile

## การติดตั้ง

```bash
npm install
```

## รันพัฒนา

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## ภาษา

- ไทย (default): `/`
- ລາວ: `/lo`
- English: `/en`

สลับภาษาได้จากปุ่มใน Header

## แก้ไขข้อมูลตัวแทน

- **เบอร์โทร / Line / Facebook**: แก้ใน `pages/contact.vue` (แทน `080-000-0000`, `YOUR_LINE_ID`)
- **ชื่อตัวแทน**: อยู่ใน `locales/th.json`, `lo.json`, `en.json` ที่ `footer.agent` และ `about.agentName`

## โครงสร้าง

- `pages/` — หน้าแรก, เกี่ยวกับ, บริการ, ติดต่อ
- `layouts/default.vue` — Header (โลโก้ AIA + เมนู + สลับภาษา) + Footer
- `locales/` — ข้อความ 3 ภาษา
- `assets/css/main.css` — ธีม AIA สีขาว–แดง (เหมือนโลโก้)
- `public/logo.png` — โลโก้ AIA (แสดงใน Header)
- `public/agent.png` — ภาพตัวแทน (แสดงใน Hero + หน้าเกี่ยวกับ)
