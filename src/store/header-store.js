import { create } from 'zustand';

export const useLinksStore = create(() => ({
    links: {
        main: {link: '/', name: 'Main Page'},
        reg: {link: '/reg', name: 'Sign-up'},
        login: {link: '/login', name: 'Login'}
    },
  }))