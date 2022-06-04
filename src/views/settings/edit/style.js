import styled from 'styled-components'

export const EditContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  scroll-margin-top: 4rem;
`

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
`

export const EditBox = styled(ContainerBox)`
  gap: 1rem;
`
