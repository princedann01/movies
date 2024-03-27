function Card({title,year,vote,src}){
  return(
    <div >
      <div className='px-4 mb-2'>
        <img src={src} className='w-40 h-48' />
        <h6>{title}</h6>
        <p>Year: {year}</p>
        <p>Rate: {vote}</p>
      </div>
    </div>
  )
}
export default Card