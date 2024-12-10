import React from 'react'

function Pagination({totalProduct,cardPerPage,setCurrentPage,currentPage}) {
   let pages=[]

   for(let i=1;i<=Math.ceil(totalProduct/cardPerPage);i++) {
    pages.push(i)
   
   }

   const handlePrevious=()=>{
    if(currentPage>1){
       setCurrentPage(currentPage-1)
    }
   }

   const handleNext=()=>{
    setCurrentPage(currentPage+1)
   }
  return (
    <>
   <div className='d-flex align-items-center justify-content-center '> 
    
        <button onClick={handlePrevious} disabled={currentPage==1} className='btn btn-light m-1'> previious </button>
    
    
    {
        pages?.map(page=>(
          
            <button onClick={()=> setCurrentPage(page)} className={`btn btn-light m-1 ${currentPage==page ? 'active':''}`}>{page}</button>
        ))
    }
    <button onClick={handleNext} disabled={currentPage==pages.length} className='btn btn-light m-1'>next</button>
   </div>
    </>
  )
}

export default Pagination