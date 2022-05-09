import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display:flex;
justify-content:center;
align-items:center;
font-weight: 500;
font-size: 14px;
`

function Announcement() {
  return (
    <div>
        <Container>
            Super Deal! Free shipping on Orders over $50
        </Container>
    </div>
  )
}

export default Announcement