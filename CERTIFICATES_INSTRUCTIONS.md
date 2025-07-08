# 🏆 Customizing Your Certificates Section

## Quick Setup:

### 1. **Update Certificate Details**
Edit `src/components/CertificatesSection.tsx` and modify the `certificates` array:

```tsx
const certificates = [
  {
    id: 1,
    title: 'Your Certificate Title',
    issuer: 'Issuing Organization',
    date: '2024',
    description: 'Description of what you learned',
    image: 'your-certificate-image.jpg', // Add to public/ folder
    category: 'Category Name',
    color: 'from-purple-500 to-pink-500', // Tailwind gradient
    url: 'https://your-certificate-url.com',
    downloadUrl: 'https://download-url.com'
  },
  // Add more certificates...
];
```

### 2. **Add Certificate Images**
- Place certificate images in the `public/` folder
- Update the `image` field in the certificates array
- Recommended size: 400x300 pixels

### 3. **Customize Categories**
The categories are automatically generated from your certificates, but you can:
- Add new categories by adding them to your certificates
- The filter buttons will update automatically

### 4. **Update Links**
- Set `url` to your certificate verification page
- Set `downloadUrl` to the PDF download link
- Or use `#` for placeholder links

## 🎨 Features Included:

- ✅ **Hover Effects**: Cards scale and glow on hover
- ✅ **Category Filtering**: Filter certificates by category
- ✅ **Responsive Design**: Works on all devices
- ✅ **Smooth Animations**: Beautiful transitions
- ✅ **Action Buttons**: View and download options
- ✅ **Floating Elements**: Animated dots on hover

## 📝 Example Certificate:

```tsx
{
  id: 1,
  title: 'AWS Solutions Architect',
  issuer: 'Amazon Web Services',
  date: '2024',
  description: 'Comprehensive training in AWS cloud architecture, deployment, and management',
  image: '/aws-certificate.jpg',
  category: 'Cloud',
  color: 'from-orange-500 to-red-500',
  url: 'https://aws.amazon.com/verification',
  downloadUrl: 'https://aws.amazon.com/certificate.pdf'
}
```

## 🎯 Tips:

- Use high-quality images for certificates
- Keep descriptions concise but informative
- Use consistent date formats
- Choose appropriate gradient colors for each category
- Test all links before deploying

Your certificates section is now ready to showcase your achievements! 🚀 