module.exports = {
  content: [
    './content/**/*.{html,js,md}',
    './layouts/**/*.html',
    './themes/**/layouts/**/*.html'
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '850px',  // 自定義 prose 寬度
        'custom': '850px'  // 額外的自定義寬度選項
      },
      spacing: {
        'custom': '850px'
      }
    }
  },
  plugins: []
}
