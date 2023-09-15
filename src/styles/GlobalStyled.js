import styled from "styled-components";


export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};


`

export const Container = styled.div`

  width: 90%;
  max-width: 1280px;
  margin: auto;
  letter-spacing: 0.17rem;
  
  `

  export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};
  
  `

  export const Flexcontainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};  
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction}; 

// if we add a prop of fullwidthchild to flex container then it's child div will have a flex 1 prop ->

    & > div {
      flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }
  `

  // wrap the padding container component inside the the styled constructor so the heafer component will be using properties of of the padding container (paddint-top, padding-bottom, etc)

  export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
      switch(size){
        case 'h1':
          return '3rem';
          
        
        case 'h2':
          return '2rem';
        

        case 'h3':
          return '1.5rem';
        
        case 'h4':
          return '1.2 rem';

        case 'h5':
          return '1 rem';

        case 'h6':
          return '0.8 rem';

        
        default:
          return;


      }

    }}
  `


  export const LeText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};

    
  `

  export const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 2rem;
    background-image:linear-gradient(to right,  hsla(206, 91.30%, 9.00%, 0.00), hsla(212, 67.40%, 16.90%, 0.11));
    border-radius: 15px;
    
    
  `

  export const IconContainer = styled.div`
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: ${({ color, theme }) => {
      switch(color){
        case 'white':
          return theme.colors.white;

        case 'le':
          return theme.colors.secondary;

        default:
          return;
      }
    }}
  `

