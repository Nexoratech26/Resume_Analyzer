import React, { useState } from 'react'
import { Sparkle, Upload, Sparkles, FileText } from 'lucide-react'
export const Analyzer = () => {

    const [resume, setResume] = useState(null)
    const [jobDescription, setJobDescription] = useState("")
    const handleFile = (e) => {
        const file = e.target.files[0]
        setResume(file)
    }
    const OnSub = async (e) => {
        // if(resume.type !== "")
        e.preventDefault()
        
       console.log(resume,jobDescription)
        

    }
    return (
        <section className='  min-h-screen bg-[#09090B]  px-6 py-10' >
            <div className='text-center  mb-14'>
                <div className=' flex justify-center  '>
                    <Sparkle color='#7C3AED' size={28} />
                </div>

                <h1 className=' text-white font-bold text-3xl mb-2 ' >
                    AI Resume Analyzer
                </h1>

                <p className=' text-gray-500 '>
                    See how well your resume matches job
                </p>
            </div>
            <form onSubmit={OnSub} >
                <div className=' text-white grid grid-cols-2 gap-6   ' >

                    <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-6  ' >


                        <h1 className=' font-semibold text-lg  mb-3 '>
                            Your Resume
                        </h1>
                        <p className=' text-gray-500 mb-6 text-md ' >
                            Upload your PDF or DOCX resume.
                        </p>
                        <div>

                            <label className=' p-10 rounded-2xl  flex flex-col justify-center items-center border-2 border-dashed border-zinc-700 ' htmlFor='resume'>
                                {resume ? (
                                    <>
                                        <FileText size={38}
                                            className="text-violet-400 mb-3"
                                        />
                                        <p className=' font-semibold' >{resume.name}</p>
                                        <p className="text-sm text-zinc-500 mt-1">
                                            {(resume.size / 1024).toFixed(1)} KB
                                        </p>
                                    </>
                                ) : (

                                    <>
                                        <Upload size={38} className=' text-gray-500 mb-4 ' />
                                        <h1 className=' font-semibold' >Click to Upload</h1>
                                        <p className=' text-gray-400 text-sm mt-1  ' >PDF or DOCX</p>
                                    </>)
                                }
                                <input type="file"
                                    id='resume'
                                    className=' hidden '
                                    onChange={handleFile}
                                />

                            </label>


                        </div>

                    </div>
                    <div className='bg-[#18181B] border border-zinc-800 rounded-2xl p-6 ' >

                        <h1 className='font-semibold text-lg  mb-3'>
                            Job Description
                        </h1>
                        <p className='text-gray-500 mb-6 text-md  ' >Paste the job description you are applying fro</p>

                        <textarea name="" id=""
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder='paste the job description here  '
                            className=' bg-[#09090B] p-5 w-full h-64 rounded-xl outline-none resize-none focus:border-violet-500 transition'
                        >

                        </textarea>
                    </div>

                </div>

                <div className=' flex justify-center mt-8 '>
                    <button type="submit"
                        disabled={!resume || !jobDescription.trim()}
                        className=' font-medium items-center gap-4 hover:bg-violet-500 disabled:cursor-not-allowed  bg-violet-600 rounded-2xl disabled:bg-zinc-800 disabled:text-gray-500 flex py-3 px-8 '>
                        <Sparkles size={18} />
                        Analyze Resume
                    </button>
                </div>

            </form>
        </section>
    )
}
