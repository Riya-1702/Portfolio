# 📸 Adding Your Photo to the Portfolio

## Quick Steps:

1. **Get your photo ready:**
   - Use a professional headshot or high-quality photo
   - Square aspect ratio works best (1:1)
   - Recommended size: 400x400 pixels or larger
   - Formats: JPG, PNG, or WebP

2. **Add your photo:**
   - Copy your photo file to the `public/` folder
   - Rename it to `riya-sharma-photo.jpg`
   - Or update the filename in `src/components/HeroSection.tsx` line 85

3. **Test it:**
   - Run `npm run dev`
   - Open http://localhost:5173
   - Your photo should appear in the hero section

## Alternative Filename:
If you want to use a different filename, edit `src/components/HeroSection.tsx` and change:
```tsx
src="/riya-sharma-photo.jpg"
```
to your preferred filename.

## Troubleshooting:
- If the photo doesn't appear, check the browser console for errors
- Make sure the file is in the `public/` directory
- Verify the filename matches exactly (case-sensitive)
- The portfolio will show a placeholder if your photo fails to load

That's it! Your photo will now be displayed in your beautiful portfolio. 🎉 