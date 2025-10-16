export const compressImage = (file: File, quality = 0.7): Promise<File> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (event) => {
      const img = new Image()
      img.src = event.target?.result as string

      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!

        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(new File([blob], file.name, { type: blob.type }))
            }
          },
          'image/jpeg',
          quality
        )
      }
    }
  })
}
