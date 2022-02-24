import React from 'react'

const FileUpload = ({files,setFiles}) => {
const uploadHandler = () => {}
return (
    <>
        <div className="file-card">
            <div className="file-inputs">
                <input type="file">
                    <button>
                        <i>

                        </i>
                    </button>
                </input>
            </div>
        </div>
    </>
)
};

export default FileUpload