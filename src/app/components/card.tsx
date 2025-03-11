const Card =  ({children}:{children: React.ReactNode})=>{
    const cardStyles={
        padding:"20px",
        border: '1px solid black',
        borderRadius:'5px',
    }

    return <div style={cardStyles}>{children}</div>
}

export default Card;