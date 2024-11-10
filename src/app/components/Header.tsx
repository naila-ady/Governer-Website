import Image from "next/image"
import logo from "../../../public/images/logo.png";
export default function Header(){
    return( 
    
        <div className="w-full h-24 fixed z-10 bg-[#044E83] gap-2 mx-auto flex items-center justify-between">
    <div className="mt-[96px] ml-20 ">
        <Image src={logo} alt="logo-image" width={110} height={113}></Image>
        </div>
        <div className="mt-3 ml-4 overflow-hidden font-semibold text-2xl text-[#B9D8f3]"> 
            <h1>Tuition Free Education Program on Latest Technologies</h1>
            </div>
            
            <a href="/">
            <div className="text-2xl font-extralight ml-1 mr-2 mt-3 text-[#FAF9F6]">
                Home
                </div>
            </a>
            <a href="#Apply">
            <div className="text-2xl font-extralight mr-4 mt-3 ml-1 text-[#FAF9F6]">
                Apply
                </div>
            </a>
             <a href="#Jobs">
            <div className="text-2xl  font-extralight mr-4 mt-3 ml-1 text-[#FAF9F6]">
                Jobs
                </div>
            </a> 
            <a href="#Result">
            <div className="text-2xl font-extralight mr-4 mt-3 ml-1 text-[#FAF9F6]">
                Result
                </div>
            </a>
            <a href="#Course">
            <div className="text-2xl font-extralight mt-3 mr-10 text-[#FAF9F6]">
                <form>Course</form>
                </div>
            </a>
         </div>   
        
        
                  
    
    
    )
}