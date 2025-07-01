if (import.meta.env.MODE === 'development') {
  window.Telegram = {
    WebApp: {
      initDataUnsafe: {
        user: {
          id: 12345,
          first_name: 'John',
          last_name: 'Doe',
          username: 'johndoe',
          language_code: 'en',
        },
      },
      themeParams: { bg_color: '#ffffff' },
      ready: () => console.log('WebApp ready'),
      expand: () => console.log('Expanded'),
      showPopup: (params: any) => console.log('Popup:', params),
    },
  }
}
