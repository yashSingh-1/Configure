
const placeholder = [
    "Some value sentences",
    "Some value sentences",
    "Some value sentences",
    "Some value sentences",
    "Some value sentences",

]

const Sidebar = () => {
  return (
    <div className='md:flex flex-col h-screen w-fit bg-slate-800 px-8 py-4 hidden'>
        <div className='text-2xl font-mono flex justify-center items-center p-4'>
            Configure
        </div>
        <div>
            {
                placeholder.map((item) => (
                    <div className='overflow-hidden p-2 my-1 border-b'>
                        {item}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar