const styleHeader = {
    backgroundColor : '#0f0763',
    color: "white",
    height: '70px',
    display:'flex',
    alignItems: "center",
    fontStyle: 'Serif',
    fontSize: '30px'
}

const Header = () => {
    const nama = 'Putri Lestari'
    return (
        <header style={styleHeader}> {nama} </header>
    )
}

export default Header