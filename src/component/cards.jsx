function Card({title,year,vote,src}){
  return(
    <div >
      <div className=' mb-2'>
        <img src={src} className='min-w-40 min-h-48' />
        <h6>{title}</h6>
        <p>Year: {year}</p>
        <p>Rate: {vote}</p>
      </div>
    </div>
  )
}
export default Card