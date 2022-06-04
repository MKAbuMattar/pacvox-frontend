import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
  position: sticky;
  top: 0;
  z-index: 99;
`

export const NavbarContainerInner = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
