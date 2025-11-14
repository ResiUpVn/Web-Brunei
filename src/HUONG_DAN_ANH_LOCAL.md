# HƯỚNG DẪN SỬ DỤNG ẢNH LOCAL

## Cách thêm ảnh vào website

### Bước 1: Tạo thư mục chứa ảnh
Tạo thư mục `/public/images/` trong dự án của bạn với cấu trúc:

```
public/
  images/
    destinations/     (ảnh địa điểm du lịch)
    food/            (ảnh món ăn)
    culture/         (ảnh văn hóa)
    hero/            (ảnh banner chính)
```

### Bước 2: Tải ảnh từ các nguồn đã cho

#### Từ iVIVU (Ẩm thực):
https://www.ivivu.com/blog/2023/11/top-17-mon-an-dac-trung-hap-dan-cua-am-thuc-brunei/

Tải các ảnh món ăn và đặt vào: `public/images/food/`
- ambuyat.jpg
- nasi-katok.jpg
- beef-rendang.jpg
- satay.jpg
- soto.jpg
- kueh.jpg
- teh-tarik.jpg
- kelupis.jpg

#### Từ Vietravel (Địa điểm):
https://www.vietravel.com/vn/am-thuc-kham-pha/10-dia-diem-du-lich-noi-tieng-cua-brunei-v16092.aspx

Tải ảnh các địa điểm và đặt vào: `public/images/destinations/`
- masjid-omar-ali.jpg
- kampong-ayer.jpg
- royal-regalia.jpg
- ulu-temburong.jpg
- jerudong-park.jpg
- jame-asr-mosque.jpg
- istana-nurul-iman.jpg
- gadong-market.jpg
- tasek-lama.jpg
- pantai-muara.jpg

#### Từ Lửa Hồng Việt Nam (Lễ hội):
https://luhanhvietnam.com.vn/du-lich/4-le-hoi-lon-nhat-o-brunei.html

Tải ảnh lễ hội và đặt vào: `public/images/culture/`
- hari-raya.jpg
- national-day.jpg
- royal-birthday.jpg
- festivals.jpg

### Bước 3: Sử dụng ảnh trong code

Sau khi đã tải và đặt ảnh vào thư mục `public/images/`, bạn có thể sử dụng như sau:

```typescript
// Trong file component
<ImageWithFallback
  src="/images/destinations/masjid-omar-ali.jpg"
  alt="Masjid Sultan Omar Ali Saifuddien"
  className="w-full h-full object-cover"
/>
```

### Danh sách ảnh cần tải:

#### Món ăn (8 ảnh):
1. `/images/food/ambuyat.jpg` - Món Ambuyat
2. `/images/food/nasi-katok.jpg` - Nasi Katok
3. `/images/food/beef-rendang.jpg` - Beef Rendang
4. `/images/food/satay.jpg` - Satay
5. `/images/food/soto.jpg` - Soto
6. `/images/food/kueh.jpg` - Kueh-Mueh
7. `/images/food/teh-tarik.jpg` - Teh Tarik
8. `/images/food/kelupis.jpg` - Kelupis

#### Địa điểm (10 ảnh):
1. `/images/destinations/masjid-omar-ali.jpg`
2. `/images/destinations/kampong-ayer.jpg`
3. `/images/destinations/royal-regalia.jpg`
4. `/images/destinations/ulu-temburong.jpg`
5. `/images/destinations/jerudong-park.jpg`
6. `/images/destinations/jame-asr-mosque.jpg`
7. `/images/destinations/istana-nurul-iman.jpg`
8. `/images/destinations/gadong-market.jpg`
9. `/images/destinations/tasek-lama.jpg`
10. `/images/destinations/pantai-muara.jpg`

#### Văn hóa (4 ảnh):
1. `/images/culture/hari-raya.jpg`
2. `/images/culture/national-day.jpg`
3. `/images/culture/royal-birthday.jpg`
4. `/images/culture/festivals.jpg`

#### Banner (1 ảnh):
1. `/images/hero/brunei-hero.jpg` - Ảnh banner chính trang chủ

### Lưu ý:
- Tên file không dấu, viết thường, dùng dấu gạch ngang (-)
- Định dạng khuyến nghị: JPG hoặc PNG
- Kích thước khuyến nghị: 
  - Banner hero: 1920x1080px
  - Địa điểm: 1200x800px
  - Món ăn: 800x600px
  - Văn hóa: 1000x667px
- Nén ảnh để tối ưu tốc độ tải trang

### Ví dụ cập nhật code:

Mở file `/pages/AmThuc.tsx` và thay đổi:
```typescript
// Từ
image: 'https://images.unsplash.com/...'

// Thành
image: '/images/food/ambuyat.jpg'
```

Làm tương tự cho các file khác: `/pages/Top10.tsx`, `/pages/VanHoa.tsx`, `/pages/Home.tsx`
