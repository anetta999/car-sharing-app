// const SomeName = styled.div`
//   color: ${({theme}) => theme.color.black};

//   &:hover, &:focus {
//     color: ${({theme}) => theme.color.secondaryLightBlue};
//     background-color: ${({theme}) => theme.color.secondaryLightBlue
//   };
//   }

export const theme = {
  colors: {
    blue: '#3470FF',
    accent: '#0B44CD',
    headingTextColor: '#121417',
    primaryTextColor: 'rgba(18, 20, 23, 0.50)',
    buttonTextColor: '#FFF',
    selectTextColor: 'rgba(18, 20, 23, 0.20)',
    modalTextColor: '#363535',
  },
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
    modal: '300ms ease-in-out',
  },
};
