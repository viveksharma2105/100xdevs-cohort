
export const Input = ({type, placeholder, onClick}) => {

    return <span onClick={onClick} className= {` text-4xl  px-2 py-2 text-white cursor-pointer bg-blue-500  `} >
        <input type={type} placeholder={placeholder} className="outline-none bg-blue-200 rounded-xl p-2" ></input>
    </span>
}